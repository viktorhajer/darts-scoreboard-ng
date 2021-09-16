import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {ImitatorSettings} from './models/imitator.settings.model';
import {SoundService} from '~services/sound.service';
import {ImitatorState} from './models/imitator.state.model';
import {StatisticsService} from '~services/statistics.service';

@Component({
  templateUrl: './imitator.component.html',
  animations: [slideInAnimation],
})
export class ImitatorComponent extends Playground<ImitatorState> {

  settings: ImitatorSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, statisticsService: StatisticsService) {
    super(application, game, route, dialogService, soundService, statisticsService, 'imitator');
    this.nextEnabled = false;
    this.settings = new ImitatorSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.game.actualThrow === 1) {
      state.punished = fieldIndex !== state.actFieldIndex;
    } else if (this.game.actualThrow === 2) {
      const newScore = state.punished && score === 0 ? 25 : score;
      player.score += (state.punished ? newScore * -1 : newScore) * this.multiplier;
    } else {
      this.game.nextPlayer();
      const newFieldIndex = score === 0 ? Math.floor(Math.random() * 20) : fieldIndex;
      this.getPlayerState(this.game.getActualPlayer()).actFieldIndex = newFieldIndex;
    }
  }

  isPrimaryField(fieldIndex: number): boolean {
    return this.game.actualThrow === 0 && this.getPlayerState(this.game.getActualPlayer()).actFieldIndex === fieldIndex;
  }

  checkPlayerState(player: Player) {
    if (this.game.isTheLastPlayer(player) && (this.game.round + 1) === this.settings.round && this.game.actualThrow === 2) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    }
  }

  customReset() {
    this.game.players.forEach(player => player.state = new ImitatorState());
  }

  getGameConfig(): string {
    return this.settings.round + '';
  }
}
