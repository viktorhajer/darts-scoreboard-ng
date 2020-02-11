import {Component} from '@angular/core';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';

@Component({
  templateUrl: './x01.component.html'
})
export class X01Component extends PlaygroundModel<PlaygroundState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset(): void {
    this.game.players.forEach(player => player.score = this.settings.startValue);
  }

  validateSettings(): boolean {
    return true;
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const actualScore = score * this.game.multiplier;

    const validStart = !player.first || this.settings.isNormalStart()
      || (player.first
        && ((this.settings.isDoubleStart() && this.game.multiplier === 2)
          || (this.settings.isTripleStart() && this.game.multiplier === 3)));

    if (validStart) {
      player.first = false;
      return this.countDown(player, actualScore);
    } else {
      return Promise.resolve();
    }
  }

  countDown(player: Player, score: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const id = setInterval(() => {
        if (score === 0) {
          clearInterval(id);
          resolve();
        } else if (player.score < 0) {
          player.score -= score;
          score = 0;
        } else {
          player.score--;
          score--;
        }
      }, 5);
    });
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    let next = false;

    if ((this.settings.isHighScoreGame() && player.score <= 0) ||
      ((player.score === 0 && (this.settings.isNormalCheckout()
        || (this.settings.isDoubleCheckout() && this.game.multiplier === 2)
        || (this.settings.isTripleCheckout() && this.game.multiplier === 3))))) {
      player.win = true;
      next = true;
    } else if (player.score <= 0
      || (this.settings.isDoubleCheckout() && player.score < 2)
      || (this.settings.isTripleCheckout() && player.score < 3)) {
      player.throws.forEach(t => player.score += t);
      next = true;
      this.busted();
    }

    if (this.game.actualThrow === 3 || next) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  isFieldEnabledToThrow(field: number): boolean {
    return true;
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  isLastRound(): boolean {
    return false;
  }

  canBeDraw(): boolean {
    return false;
  }
}
