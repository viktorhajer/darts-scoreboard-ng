import {Component} from '@angular/core';
import {Playground} from '../shared/models/playground.model';
import {GameService} from '../shared/services/game.service';
import {Player} from '../shared/models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '../shared/services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {CaptureTheFlagState} from './models/capture-the-flag.state.model';
import {CaptureTheFlagSettings} from './models/capture-the-flag.settings.model';
import {SoundService} from '../shared/services/sound.service';
import {StatisticsService} from '../shared/services/statistics.service';
import {BotService} from '../shared/services/bot.service';
import {VoiceControlService} from '../shared/services/voice-control.service';


@Component({
  templateUrl: './capture-the-flag.component.html',
  animations: [slideInAnimation],
  standalone: false
})
export class CaptureTheFlagComponent extends Playground<CaptureTheFlagState> {

  settings: CaptureTheFlagSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService,
              statisticsService: StatisticsService, voiceControl: VoiceControlService) {
    super('Capture the Flag', application, game, route, dialogService, soundService,
      botService, statisticsService, voiceControl,'ctf');
    this.settings = new CaptureTheFlagSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.isActiveField(fieldIndex)) {
      state.increaseFieldCount(fieldIndex, this.multiplier);
      if (state.getFieldCount(fieldIndex) >= 3) {
        player.score += this.settings.noScore ? 1 : score;
        this.checkWinner(player);
        this.game.actualFieldIndex++;
      }
    } else if (fieldIndex === 20) {
      state.increaseFieldCount(this.settings.fields[this.game.actualFieldIndex], 3);
      player.score += this.settings.noScore ? 1 : this.settings.fields[this.game.actualFieldIndex] + 1;
      this.checkWinner(player);
      this.game.actualFieldIndex++;
    }
  }

  checkPlayerState(player: Player) {
    if (this.game.actualFieldIndex === this.settings.fields.length) {
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
      let str = '';
      for (let i = 0; i < Math.min(fieldCount, 3); i++) {
        str += '●';
      }
      for (let i = fieldCount; i < 3; i++) {
        str += '○';
      }
      return str;
    }
  }

  customReset() {
    this.game.actualFieldIndex = 0;
    this.game.players.forEach(player => player.state = new CaptureTheFlagState());
    if (this.settings.style === 0) {
      this.settings.randomCity();
    } else if (this.settings.style === 1) {
      this.settings.randomCountry();
    } else {
      this.settings.randomContinent();
    }
  }

  override customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  isActiveField(fieldIndex: number): boolean {
    return this.settings.fields[this.game.actualFieldIndex] === fieldIndex;
  }

  override isFieldEnabled(fieldIndex: number): boolean {
    return fieldIndex === 20 || this.settings.fields.indexOf(fieldIndex) === this.game.actualFieldIndex;
  }

  override isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  override getFieldNote(fieldIndex: number): string {
    const player = this.game.players.find(player => this.getPlayerState(player).getFieldCount(fieldIndex) >= 3);
    return player ? player.name : '';
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

  override getGameConfig(): string {
    return this.settings.fields.length + '';
  }

  private checkWinner(player: Player) {
    let total = this.settings.fields.length;
    const sum = player.score;
    if (!this.settings.noScore) {
      total = this.settings.fields.reduce((a, b) => a + b, 0);
    }
    if (sum > Math.floor(total / 2)) {
      player.setWin(true);
    }
  }
}
