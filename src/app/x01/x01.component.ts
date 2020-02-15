import {Component} from '@angular/core';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';

@Component({
  templateUrl: './x01.component.html',
  animations: [slideInAnimation],
})
export class X01Component extends PlaygroundModel<PlaygroundState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset() {
    this.game.players.forEach(player => {
      player.state = null;
      player.score = this.settings.startValue;
    });
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const actualScore = score * this.multiplier;

    const validStart = !player.first || this.settings.isNormalStart()
      || (player.first
        && ((this.settings.isDoubleStart() && this.multiplier === 2)
          || (this.settings.isTripleStart() && this.multiplier === 3)));

    if (validStart) {
      player.first = false;
      return this.countDown(player, actualScore);
    } else {
      return Promise.resolve();
    }
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    let next = false;

    if ((this.settings.isHighScoreGame() && player.score <= 0) ||
      ((player.score === 0 && (this.settings.isNormalCheckout()
        || (this.settings.isDoubleCheckout() && this.multiplier === 2)
        || (this.settings.isTripleCheckout() && this.multiplier === 3))))) {
      player.win = true;
      next = true;
    } else if (player.score <= 0
      || (this.settings.isDoubleCheckout() && player.score < 2)
      || (this.settings.isTripleCheckout() && player.score < 3)) {
      player.throws.forEach(t => player.score += t);
      next = true;
      this.dialogService.openErrorDialog(`${this.game.getActualPlayer().name} busted!`);
    }

    if (this.game.actualThrow === 3 || next) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  private countDown(player: Player, score: number): Promise<any> {
    return new Promise<any>((resolve) => {
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
}
