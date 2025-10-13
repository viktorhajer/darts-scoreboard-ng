import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {slideInAnimation} from '../route-animation';
import {FivesSettings} from './models/fives.settings.model';
import {PlaygroundState} from '../shared/models/playground-state.model';
import {Playground} from '../shared/models/playground.model';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {GameService} from '../shared/services/game.service';
import {SoundService} from '../shared/services/sound.service';
import {DialogService} from '../shared/services/dialog.service';
import {BotService} from '../shared/services/bot.service';
import {StatisticsService} from '../shared/services/statistics.service';
import {Player} from '../shared/models/player.model';
import {SoundControlService} from '../shared/services/sound-control.service';

@Component({
    templateUrl: './fives.component.html',
    animations: [slideInAnimation],
    standalone: false
})
export class FivesComponent extends Playground<PlaygroundState> {

  settings: FivesSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService,
              statisticsService: StatisticsService, soundControl: SoundControlService) {
    super('Fives', application, game, route, dialogService, soundService, botService,
      statisticsService, soundControl,'fives');
    this.settings = new FivesSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    if (this.game.isTheLastThrow()) {
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        sum += t.score * t.multi;
      }
      if (sum % this.settings.divider === 0) {
        if (this.settings.noCheat && player.throwsHistory[player.throwsHistory.length - 1].score === 0 && sum !== 0) {
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

  override isPrimaryField(fieldIndex: number): boolean {
    if (this.game.actualThrow === 2) {
      const mod = this.settings.divider - (this.game.getActualPlayer().getThrowsTotal() % this.settings.divider);
      let max = mod + this.settings.divider;
      const all = [mod];
      while (max <= 20) {
        all.push(max);
        max += this.settings.divider;
      }
      return all.some(f => f === fieldIndex + 1);
    }
    return false;
  }

  customReset() {
    this.game.players.forEach(player => player.score = this.settings.limit);
  }

  override getGameConfig(): string {
    return this.settings.divider + ',' + this.settings.limit;
  }
}
