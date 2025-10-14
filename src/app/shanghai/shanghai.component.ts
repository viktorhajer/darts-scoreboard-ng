import {Component} from '@angular/core';
import {Playground} from '../shared/models/playground.model';
import {GameService} from '../shared/services/game.service';
import {Player} from '../shared/models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '../shared/services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {ShanghaiSettings} from './models/shanghai.settings.model';
import {ShanghaiState} from './models/shanghai.state.model';
import {SoundService} from '../shared/services/sound.service';
import {STAT_NAME_SEPARATOR, StatisticsService} from '../shared/services/statistics.service';
import {BotService} from '../shared/services/bot.service';
import {VoiceControlService} from '../shared/services/voice-control.service';

@Component({
    templateUrl: './shanghai.component.html',
    animations: [slideInAnimation],
    standalone: false
})
export class ShanghaiComponent extends Playground<ShanghaiState> {

  settings: ShanghaiSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService,
              statisticsService: StatisticsService, voiceControl: VoiceControlService) {
    super('Shanghai / Halve It', application, game, route, dialogService, soundService, botService,
      statisticsService, voiceControl, 'shanghai');
    this.settings = new ShanghaiSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.isActiveField(fieldIndex)) {
      state.increaseFieldCount(fieldIndex, 1);
      state.increaseFieldScore(fieldIndex, this.multiplier);
      if (this.settings.noScore) {
        player.score += this.multiplier;
      } else {
        player.score += score * this.multiplier;
      }
    }
  }

  checkPlayerState(player: Player) {
    // Shanghai rule
    if (this.game.isTheLastThrow()) {
      let multi = 1;
      const fieldIndex = this.settings.fields[this.game.round];
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        if (t.score === Playground.getFieldValueFromIndex(fieldIndex)) {
          multi *= (t.multi + 1);
        }
      }
      if (multi === 1 && this.settings.halveIt) {
        player.score = Math.round(player.score / 2);
      } else if (multi === 1 && this.settings.resetIt) {
        player.score = 0;
      }
      player.setWin(multi === 24);
      if (player.win) {
        this.extraEndingMsg = 'SHANGHAI!!!';
      }
    }

    const gameEnded = (this.game.round === (this.settings.fields.length - 1))
      && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();
    if (gameEnded) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    } else if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  getFieldValue(player: Player, fieldIndex: number): string {
    const fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
    if (fieldCount === 0) {
      return '○○○';
    } else {
      let str = '' + this.getPlayerState(player).getFieldScore(fieldIndex) * Playground.getFieldValueFromIndex(fieldIndex);
      for (let i = 0; i < fieldCount; i++) {
        str += '●';
      }
      for (let i = fieldCount; i < 3; i++) {
        str += '○';
      }
      return str;
    }
  }

  customReset() {
    this.game.players.forEach(player => player.state = new ShanghaiState());
  }

  override customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  isActiveField(fieldIndex: number): boolean {
    return this.settings.fields[this.game.round] === fieldIndex;
  }

  isFieldDoneForPlayer(fieldIndex: number): boolean {
    return this.settings.fields.indexOf(fieldIndex) < this.game.round;
  }

  override isFieldEnabled(fieldIndex: number): boolean {
    return this.settings.fields.indexOf(fieldIndex) === this.game.round;
  }

  getActualFieldIndex(): number {
    return this.settings.fields[this.game.round];
  }

  override isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  override getTheFinalResult(): Player[] {
    let winners = this.game.players.filter(p => p.win);
    if (!winners.length) {
      return [];
    }
    let max = winners[0].score;
    winners.forEach(p => {
      max = p.score > max ? p.score : max;
    });
    winners = winners.filter(p => p.score === max).map(p => p.clone());
    const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id)).map(p => {
      const c = p.clone();
      c.win = false;
      return c;
    });
    return [...winners, ...losers];
  }

  override decoratePlayerStat(player: Player): string {
    return player.name + STAT_NAME_SEPARATOR + player.score + ((player.win && this.extraEndingMsg) ? ('/s') : '');
  }

  override getGameConfig(): string {
    return this.settings.fields.length + ','
      + (this.settings.halveIt ? '1' : '0') + '-' + (this.settings.resetIt ? '1' : '0');
  }
}
