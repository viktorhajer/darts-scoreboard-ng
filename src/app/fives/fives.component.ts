import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {FivesSettings} from './models/fives.settings.model';
import {SoundService} from '~services/sound.service';
import {STAT_NAME_SEPARATOR, StatisticsService} from '~services/statistics.service';

@Component({
  templateUrl: './fives.component.html',
  animations: [slideInAnimation]
})
export class FivesComponent extends Playground<PlaygroundState> {

  settings: FivesSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, statisticsService: StatisticsService) {
    super(application, game, route, dialogService, soundService, statisticsService, 'fives');
    this.settings = new FivesSettings();
  }

  isPrimaryField(fieldIndex: number): boolean {
    if (this.game.actualThrow === 2) {
      const mod = this.settings.divider - (this.game.getActualPlayer().getThrowsTotal() % this.settings.divider);
      let max = mod + this.settings.divider;
      const all = [mod];
      while(max <= 20) {
        all.push(max);
        max += this.settings.divider;
      }
      return all.some(f => f === fieldIndex+1);
    }
    return false;
  }

  customReset() {
    this.game.players.forEach(player => player.score = this.settings.limit);
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    if (this.game.isTheLastThrow()) {
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        sum += t.score * t.multi;
      }
      if (sum % this.settings.divider === 0) {
        if(this.settings.noCheat && player.throwsHistory[player.throwsHistory.length - 1].score === 0 && sum !== 0) {
          sum = 0;
        }
        player.score -= (sum / this.settings.divider);
      }
    }
  }

  checkPlayerState(player: Player) {
    this.game.players.forEach(p => p.setWin(p.score <= 0));
    if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  decoratePlayerStat(player: Player): string {
    return player.name + STAT_NAME_SEPARATOR + `${this.settings.divider}/${this.settings.limit}/${player.score}`;
  }
}
