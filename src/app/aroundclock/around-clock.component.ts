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
import {SoundService} from '~services/sound.service';

@Component({
  templateUrl: './around-clock.component.html',
  animations: [slideInAnimation],
})
export class AroundClockComponent extends Playground<AroundClockState> {

  settings: AroundClockSettings;
  hiddenInfo = true;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService) {
    super(application, game, route, dialogService, soundService);
    this.settings = new AroundClockSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number, scoreReal: number) {
    const state = this.getPlayerState(player);
    const originalMulti = this.multiplier;
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

    if (this.settings.saboteur && scoreReal !== 0) {
      const realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
      this.game.players.filter(p => p.id !== player.id).forEach(otherPlayer => {
        const otherPlayerState = this.getPlayerState(otherPlayer);
        if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && score === 0) {
          otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
        }
      });
    }
  }

  checkPlayerState(player: Player) {
    const state = this.getPlayerState(player);
    if ((this.settings.fields.length - 1) < state.actFieldIndex) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
      if (this.settings.punishment || this.settings.nineLives || this.settings.fiveLives) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.score;
        }
        if (multi === 0) {
          if (this.settings.punishment) {
            state.decreaseActFieldIndex();
          }
          if (this.settings.nineLives || this.settings.fiveLives) {
            state.life--;
          }
        }
      }
      this.game.nextPlayer();
    }
    if ((this.settings.nineLives || this.settings.fiveLives) && this.game.players.length > 1) {
      const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
      if (activePlayers.length === 1) {
        activePlayers[0].setWin(true);
      } else if (!!activePlayers.length) {
        while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
          this.game.nextPlayer();
        }
      }
    }
  }

  getDistanceFromRandom(): string {
    if (this.settings.style === 3) {
      const bullPos = this.settings.fields.findIndex(f => f === 20);
      const playerPos = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
      const diff = bullPos - playerPos;
      return diff >= 0 ? diff + '' : '';
    }
    return '';
  }

  toggleHiddenInfo() {
    this.hiddenInfo = !this.hiddenInfo;
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
    const life = this.settings.nineLives ? 3 : 5;
    this.game.players.forEach(player => player.state = new AroundClockState(life));
    this.settings.setStyle();
  }

  private getFieldIndex(index: number) {
    return this.settings.fields[index];
  }
}
