import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {CaptureTheFlagState} from './models/capture-the-flag.state.model';
import {CaptureTheFlagSettings} from './models/capture-the-flag.settings.model';
import {SoundService} from '~services/sound.service';
import {StatisticsService} from '~services/statistics.service';
import {BotService} from '~services/bot.service';

@Component({
  templateUrl: './capture-the-flag.component.html',
  animations: [slideInAnimation],
})
export class CaptureTheFlagComponent extends Playground<CaptureTheFlagState> {

  settings: CaptureTheFlagSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super('Capture the Flag', application, game, route, dialogService, soundService, botService, statisticsService, 'ctf');
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

  customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  isActiveField(fieldIndex: number): boolean {
    return this.settings.fields[this.game.actualFieldIndex] === fieldIndex;
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return fieldIndex === 20 || this.settings.fields.indexOf(fieldIndex) === this.game.actualFieldIndex;
  }

  isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  getFieldNote(fieldIndex: number): string {
    const player = this.game.players.find(player => this.getPlayerState(player).getFieldCount(fieldIndex) >= 3);
    return player ? player.name : '';
  }

  getTheFinalResult(): Player[] {
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

  getGameConfig(): string {
    return this.settings.fields.length+'';
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
