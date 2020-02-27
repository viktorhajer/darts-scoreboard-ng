import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {KnockoutSettings} from './models/knockout.settings.model';
import {KnockoutState} from './models/knockout.state.model';

@Component({
  templateUrl: './knockout.component.html',
  animations: [slideInAnimation],
})
export class KnockoutComponent extends Playground<KnockoutState> {

  settings: KnockoutSettings;
  score = 0;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService, 2);
    this.settings = new KnockoutSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    player.score = player.getThrowsTotal();
  }

  checkPlayerState(player: Player) {
    if (this.game.isTheLastThrow()) {
      if (this.score > player.getThrowsTotal()) {
        this.getPlayerState(player).life--;
      }
      this.score = player.getThrowsTotal();
      const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
      this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !this.getPlayerState(p).isInactive()));
      this.game.nextPlayer();
    }
    while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
      this.game.nextPlayer();
    }
  }

  isInactive(player: Player): boolean {
    return this.getPlayerState(player).isInactive();
  }

  customReset() {
    this.game.players.forEach(player =>
      player.state = new KnockoutState(this.settings.numberOfLives));
    this.score = 0;
  }

  customSettingsValidation(): boolean {
    return this.settings.numberOfLives > 0;
  }
}
