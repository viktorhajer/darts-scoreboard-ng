import {Component} from '@angular/core';
import {AroundClockState} from './models/state.model';
import {Settings} from './models/settings.model';
import {FIELDS, FIELDS_COUNT, PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';

@Component({
  templateUrl: './around-clock.component.html',
  animations: [slideInAnimation],
})
export class AroundClockComponent extends PlaygroundModel<AroundClockState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new AroundClockState(player)));
  }

  calculatePoints(score: number): Promise<any> {

    const player = this.game.getActualPlayer();
    const field = score === 25 ? 'B' : (score + '');
    const state: AroundClockState = this.getPlayerState(player);
    if (FIELDS[state.getActFieldIndex()] === field) {
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
      player.win = true;
    } else if (this.game.actualThrow === 3) {
      let multi = 1;
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        if (t.field === this.getPreviousField()) {
          multi *= (t.multi + 1);
        }
      }
      if (multi === 1 && this.settings.punishment) {
        this.getPlayerState(player).decreaseActFieldIndex();
      }
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr = field + '';
    if (field === 25) {
      fieldStr = 'B';
    }
    return FIELDS.indexOf(fieldStr) === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field);
  }

  isSecondHighlighted(field: number): boolean {
    let ret = false;
    if (!this.isFieldEnabledToThrow(field)) {
      let fieldStr = field + '';
      if (field === 25) {
        fieldStr = 'B';
      }
      ret = this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => FIELDS.indexOf(fieldStr) === this.getPlayerState(p).getActFieldIndex());
    }
    return ret;
  }

  getActualField(player): string {
    return FIELDS[this.getPlayerState(player).getActFieldIndex()];
  }

  isLastRound(): boolean {
    return false;
  }

  private getPreviousField(): string {
    return FIELDS[this.game.round > 0 ? this.game.round : 0];
  }

  private getPlayerState(player: Player): AroundClockState {
    return this.state.filter(s => s.player.id === player.id)[0];
  }
}
