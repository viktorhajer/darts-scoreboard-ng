import {Component} from '@angular/core';
import {Settings} from './models/settings.model';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  templateUrl: './x01.component.html',
  animations: [slideInAnimation],
})
export class X01Component extends Playground<PlaygroundState> {

  settings: Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new Settings();
  }

  customReset() {
    this.game.players.forEach(player => player.score = this.settings.startValue);
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const validStart = !player.first || this.settings.isNormalStart()
      || (player.first
        && ((this.settings.isDoubleStart() && this.multiplier === 2)
          || (this.settings.isTripleStart() && this.multiplier === 3)));
    if (validStart) {
      const actualScore = score * this.multiplier;
      player.first = false;
      player.score -= actualScore;
    }
  }

  checkPlayerState(player: Player) {
    let next = false;
    if ((this.settings.isHighScoreGame() && player.score <= 0) ||
      ((player.score === 0 && (this.settings.isNormalCheckout()
        || (this.settings.isDoubleCheckout() && this.multiplier === 2)
        || (this.settings.isTripleCheckout() && this.multiplier === 3))))) {
      player.setWin();
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
  }
}
