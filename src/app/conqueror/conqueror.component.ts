import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {ConquerorState} from './models/conqueror.state.model';
import {ConquerorSettings} from './models/conqueror.settings.model';

@Component({
  templateUrl: './conqueror.component.html',
  animations: [slideInAnimation],
})
export class ConquerorComponent extends Playground<ConquerorState> {

  settings: ConquerorSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new ConquerorSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.isActiveField(fieldIndex)) {
      state.increaseFieldCount(fieldIndex, this.multiplier);
      if (state.getFieldCount(fieldIndex) >= 3) {
        player.score += this.settings.noScore ? 1 : score;
        this.game.actualFieldIndex++;
      }
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
    this.game.players.forEach(player => player.state = new ConquerorState());
  }

  customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  isActiveField(fieldIndex: number): boolean {
    return this.settings.fields[this.game.actualFieldIndex] === fieldIndex;
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return this.settings.fields.indexOf(fieldIndex) === this.game.actualFieldIndex;
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
}
