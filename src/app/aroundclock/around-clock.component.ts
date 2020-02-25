import {Component} from '@angular/core';
import {AroundClockState} from './models/state.model';
import {Settings} from './models/settings.model';
import {FIELDS_COUNT, Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {Player} from '~models/player.model';

@Component({
  templateUrl: './around-clock.component.html',
  animations: [slideInAnimation],
})
export class AroundClockComponent extends Playground<AroundClockState> {

  settings: Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new Settings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (state.getActFieldIndex() === fieldIndex) {
      // last throw
      if (state.actFieldIndex >= FIELDS_COUNT - this.multiplier) {
        this.multiplier = this.multiplier === 1 ? 1 : FIELDS_COUNT - (state.actFieldIndex + 1);
      }
      state.increaseActFieldIndex(this.settings.jump ? this.multiplier : 1);
      if (state.actFieldIndex >= FIELDS_COUNT) {
        state.actFieldIndex = FIELDS_COUNT;
      }
    }
    player.score++;
  }

  checkPlayerState(player: Player) {
    if ((FIELDS_COUNT - 1) < this.getPlayerState(player).getActFieldIndex()) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
      if (this.settings.punishment) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.score;
        }
        if (multi === 0) {
          this.getPlayerState(player).decreaseActFieldIndex();
        }
      }
      this.game.nextPlayer();
    }
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return fieldIndex === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
  }

  isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  isSecondaryField(fieldIndex: number): boolean {
    if (!this.isFieldEnabled(fieldIndex)) {
      return this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => fieldIndex === this.getPlayerState(p).getActFieldIndex());
    }
    return false;
  }

  getFieldNote(fieldIndex: number): string {
    const owners = this.game.players.filter(p => this.getPlayerState(p).actFieldIndex === fieldIndex).map(p => p.name);
    return !!owners.length ? owners.join(' ') : '';
  }

  customReset() {
    this.game.players.forEach(player => player.state = new AroundClockState());
  }
}
