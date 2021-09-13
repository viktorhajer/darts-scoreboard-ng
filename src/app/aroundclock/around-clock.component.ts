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
    super(application, game, route, dialogService, soundService, 2);
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

    if ((this.settings.saboteur || this.settings.promoter) && scoreReal !== 0) {
      const realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
      this.game.players.filter(p => p.id !== player.id).forEach(otherPlayer => {
        const otherPlayerState = this.getPlayerState(otherPlayer);
        if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && score === 0) {
          if (this.settings.saboteur) {
            otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
          } else {
            otherPlayerState.increaseActFieldIndex(this.settings.jump ? originalMulti : 1);
            if (otherPlayerState.actFieldIndex >= this.settings.fields.length) {
              otherPlayerState.actFieldIndex = this.settings.fields.length - 1;
            }
          }
        }
      });
    }
  }

  checkPlayerState(player: Player) {
    const state = this.getPlayerState(player);
    if ((this.settings.fields.length - 1) < state.actFieldIndex) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
      if (this.settings.punishment || this.settings.life !== 0) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.score;
        }
        if (multi === 0) {
          if (this.settings.punishment) {
            state.decreaseActFieldIndex();
          }
          if (this.settings.life !== 0) {
            this.soundService.no();
            player.life--;
          }
        }
      }
      this.game.nextPlayer();
    }

    if (this.settings.firstDeath) {
      const activePlayers = this.game.players.filter(p => !p.isInactive());
      if (activePlayers.length < this.game.players.length) {
        this.getTheBestPlayers().forEach(p => p.setWin(true));
      }
    }

    if (this.settings.life !== 0 && this.game.players.length > 1) {
      const activePlayers = this.game.players.filter(p => !p.isInactive());
      if (activePlayers.length === 1) {
        activePlayers[0].setWin(true);
      } else if (!!activePlayers.length) {
        while (this.game.getActualPlayer().isInactive()) {
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
    this.game.players.forEach(player => {
      player.life = this.settings.life;
      player.state = new AroundClockState();
    });
    this.settings.setStyle();
  }

  private getTheBestPlayers(): Player[] {
    const activePlayers = this.game.players.filter(p => !p.isInactive());
    let max = 0;
    activePlayers.forEach(p => {
      const index = this.getPlayerState(p).actFieldIndex;
      max = index > max ? index : max;
    });
    return activePlayers.filter(p => this.getPlayerState(p).actFieldIndex === max);
  }

  private getFieldIndex(index: number) {
    return this.settings.fields[index];
  }
}
