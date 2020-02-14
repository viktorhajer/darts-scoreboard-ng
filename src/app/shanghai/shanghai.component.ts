import {Component} from '@angular/core';
import {ShanghaiState} from './models/state.model';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';

@Component({
  templateUrl: './shanghai.component.html',
  animations: [slideInAnimation],
})
export class ShanghaiComponent extends PlaygroundModel<ShanghaiState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new ShanghaiState(player)));
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
        player.score++;
      } else {
        player.score += PlaygroundModel.getFieldValueAsNumber(field) * this.multiplier;
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
      player.win = multi === 24;
      if (player.win) {
        this.extraEndingMsg = 'SHANGHAI!!!';
      }
    }

    const gameEnded = (this.game.round === (this.settings.fields.length - 1))
      && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();
    if (gameEnded) {
      this.game.players.forEach(p => p.win = this.game.isTheBestPlayer(p));
      console.log(this.game.players);

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
      let str = '' + this.getPlayerState(player).getFieldScore(field) * PlaygroundModel.getFieldValueAsNumber(field);
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

  private getPreviousField(): string {
    return this.settings.fields[this.game.round > 0 ? this.game.round : 0];
  }

  private getPlayerState(player: Player): ShanghaiState {
    return this.state.filter(s => s.player.id === player.id)[0];
  }
}
