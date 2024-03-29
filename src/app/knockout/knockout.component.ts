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
import {SoundService} from '~services/sound.service';
import {StatisticsService} from '~services/statistics.service';
import {BotService} from '~services/bot.service';

@Component({
  templateUrl: './knockout.component.html',
  animations: [slideInAnimation],
})
export class KnockoutComponent extends Playground<KnockoutState> {

  settings: KnockoutSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super('Knockout', application, game, route, dialogService, soundService, botService, statisticsService, 'knockout', 2);
    this.settings = new KnockoutSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    player.score = player.getThrowsTotal();
  }

  checkPlayerState(player: Player) {
    if (this.game.isTheLastThrow()) {
      const score = this.getPlayerState(player).score;
      if (score > player.getThrowsTotal()) {
        player.life--;
        this.soundService.no();
      } else if (this.settings.killer && score !== 0 && score === player.getThrowsTotal()
        && player.throwsHistory[player.throwsHistory.length - 1].score !== 0) {
        this.game.getPreviousPlayer().life--;
        this.soundService.no();
      }
      this.getPlayerState(this.game.getNextPlayer()).score = player.getThrowsTotal();
      const activePlayers = this.game.getActivePlayers();
      this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !p.isInactive()));
      this.game.nextPlayer();
    }
    while (this.game.getActualPlayer().isInactive()) {
      this.game.nextPlayer();
    }
  }

  customReset() {
    this.game.players.forEach(player => {
      player.state = new KnockoutState();
      player.life = this.settings.numberOfLives;
    });
  }

  customSettingsValidation(): boolean {
    return this.settings.numberOfLives > 0;
  }

  getInfo(): number {
    const player = this.game.getActualPlayer();
    const state = this.getPlayerState(player);
    return (state.score ? state.score : 0) - (this.game.actualThrow === 0 ? 0 : player.score);
  }

  decoratePlayerStat(player: Player): string {
    return player.name;
  }
}
