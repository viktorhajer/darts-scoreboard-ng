import {Component} from '@angular/core';
import {ShanghaiState} from './models/state.model';
import {Settings} from './models/settings.model';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  templateUrl: './shanghai.component.html',
  animations: [slideInAnimation],
})
export class ShanghaiComponent extends Playground<ShanghaiState> {

  settings: Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new Settings();
  }

  customReset() {
    this.game.players.forEach(player => player.state = new ShanghaiState());
  }

  customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const state = this.getPlayerState(player);
    const field = score === 25 ? 'B' : (score + '');
    if (this.isActiveField(field)) {
      state.increaseFieldCount(field, 1);
      state.increaseFieldScore(field, this.multiplier);
      if (this.settings.noScore) {
        player.score += this.multiplier;
      } else {
        player.score += Playground.getFieldValueAsNumber(field) * this.multiplier;
      }
    }
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();

    // Shanghai rule
    if (this.game.actualThrow === 3) {
      let multi = 1;
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        if (t.field === this.getPreviousField()) {
          multi *= (t.multi + 1);
        }
      }
      if (multi === 1 && this.settings.halveIt) {
        player.score = Math.round(player.score / 2);
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
    } else if (this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }

    return Promise.resolve();
  }

  getFieldValue(player: Player, field: string): string {
    const fieldCount = this.getPlayerState(player).getFieldCount(field);
    if (fieldCount === 0) {
      return '○○○';
    } else {
      let str = '' + this.getPlayerState(player).getFieldScore(field) * Playground.getFieldValueAsNumber(field);
      for (let i = 0; i < fieldCount; i++) {
        str += '●';
      }
      for (let i = fieldCount; i < 3; i++) {
        str += '○';
      }
      return str;
    }
  }

  isActiveField(field: string): boolean {
    return this.settings.fields[this.game.round] === field;
  }

  isDoneField(field: string): boolean {
    return this.settings.fields.indexOf(field) < this.game.round;
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr = field + '';
    if (field === 25) {
      fieldStr = 'B';
    }
    return this.settings.fields.indexOf(fieldStr) === this.game.round;
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field);
  }

  isLastRound(): boolean {
    return this.game.round === this.settings.fields.length - 1;
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
    const losers  = this.game.players.filter(p => !winners.some(w => w.id === p.id)).map(p => {
      const c = p.clone();
      c.win = false;
      return c;
    });
    return [...winners, ...losers];
  }

  private getPreviousField(): string {
    return this.settings.fields[this.game.round > 0 ? this.game.round : 0];
  }
}
