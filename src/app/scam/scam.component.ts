import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {ScamSettings} from './models/scam.settings.model';
import {SoundService} from '~services/sound.service';
import {StatisticsService} from '~services/statistics.service';

@Component({
  templateUrl: './scam.component.html',
  animations: [slideInAnimation],
})
export class ScamComponent extends Playground<PlaygroundState> {

  settings: ScamSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, statisticsService: StatisticsService) {
    super(application, game, route, dialogService, soundService, statisticsService, 'scam', 2);
    this.settings = new ScamSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    if (this.isFieldEnabled(fieldIndex)) {
      if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
        this.game.numbs[fieldIndex] = 0;
      } else if(this.settings.stopper) {
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier;
      } else {
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier;
        this.game.numbs[fieldIndex] = 0;
      }
    }
  }

  checkPlayerState(player: Player) {
    if(!this.game.numbs.find(n => n)) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    }
    if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return !!this.game.numbs[fieldIndex];
  }

  customReset() {
    this.game.numbs = this.settings.numbs.map(i => i ? 1 : 0);
    this.settings.fields.forEach(f => this.settings.numbs[f] = true);
  }
}
