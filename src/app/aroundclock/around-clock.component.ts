import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {Player} from '~models/player.model';
import {AroundClockState} from './models/around-clock.state.model';
import {AroundClockSettings} from './models/around-clock.settings.model';

@Component({
  templateUrl: './around-clock.component.html',
  animations: [slideInAnimation],
})
export class AroundClockComponent extends Playground<AroundClockState> {

  settings: AroundClockSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new AroundClockSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.getFieldIndex(state.actFieldIndex) === fieldIndex) {
      // last throw
      if (state.actFieldIndex >= this.settings.fields.length - this.multiplier) {
        this.multiplier = this.multiplier === 1 ? 1 : this.settings.fields.length - (state.actFieldIndex + 1);
      }
      state.increaseActFieldIndex(this.settings.jump ? this.multiplier : 1);
      if (state.actFieldIndex >= this.settings.fields.length) {
        state.actFieldIndex = this.settings.fields.length;
      }
    }
    player.score++;
  }

  checkPlayerState(player: Player) {
    if ((this.settings.fields.length - 1) < this.getPlayerState(player).actFieldIndex) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
      if (this.settings.punishment || this.settings.nineLives) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.score;
        }
        if (multi === 0) {
          if (this.settings.punishment) {
            this.getPlayerState(player).decreaseActFieldIndex();
          } else {
            this.getPlayerState(player).life--;
          }
        }
      }
      this.game.nextPlayer();
    }
    if (this.settings.nineLives) {
      const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
      if (!!activePlayers.length) {
        while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
          this.game.nextPlayer();
        }
      }
    }
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
  }

  isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  isSecondaryField(fieldIndex: number): boolean {
    if (!this.isFieldEnabled(fieldIndex)) {
      return this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
    }
    return false;
  }

  getFieldNote(fieldIndex: number): string {
    const owners = this.game.players
      .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name);
    return !!owners.length ? owners.join(' ') : '';
  }

  customReset() {
    this.game.players.forEach(player => player.state = new AroundClockState());
  }

  customSettingsValidation(): boolean {
    return !this.settings.nineLives || this.game.getNumberOfPlayers() >= 2;
  }

  private getFieldIndex(index: number) {
    return this.settings.fields[index];
  }
}
