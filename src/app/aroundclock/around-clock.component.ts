import {Component} from '@angular/core';
import {AroundClockState} from './models/state.model';
import {Settings} from './models/settings.model';
import {FIELDS_COUNT, Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';

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

  customReset() {
    this.game.players.forEach(player => player.state = new AroundClockState());
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const field = score === 25 ? 20 : score - 1;

    const state: AroundClockState = this.getPlayerState(player);
    if (state.getActFieldIndex() === field) {
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
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    if ((FIELDS_COUNT - 1) < this.getPlayerState(player).getActFieldIndex()) {
      player.setWin();
    } else if (this.game.actualThrow === 3) {
      if (this.settings.punishment) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.fieldNum;
        }
        if (multi === 0) {
          this.getPlayerState(player).decreaseActFieldIndex();
        }
      }
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  isFieldEnabledToThrow(field: number): boolean {
    field = field === 25 ? 20 : field - 1;
    return field === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field);
  }

  isSecondHighlighted(field: number): boolean {
    let ret = false;
    if (!this.isFieldEnabledToThrow(field)) {
      field = field === 25 ? 20 : field - 1;
      ret = this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => field === this.getPlayerState(p).getActFieldIndex());
    }
    return ret;
  }

  getFieldNote(field: number): string {
    field = field === 25 ? 20 : field - 1;
    const owners = this.game.players.filter(p => (p.state as AroundClockState).actFieldIndex === field).map(p => p.name);
    return !!owners.length ? owners.join(' ') : '';
  }
}
