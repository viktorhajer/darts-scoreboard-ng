import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {SoundService} from '~services/sound.service';
import {DuelSettings} from './models/duel.settings.model';
import {DuelState} from './models/duel.state.model';
import {StatisticsService} from '~services/statistics.service';

@Component({
  templateUrl: './duel.component.html',
  animations: [slideInAnimation],
})
export class DuelComponent extends Playground<DuelState> {

  settings: DuelSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, statisticsService: StatisticsService) {
    super(application, game, route, dialogService, soundService, statisticsService, 'duel', 2);
    this.settings = new DuelSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    const actualScore = score * this.multiplier;
    if (state.ownFields.some(i => i === fieldIndex)) {
      player.score += actualScore;
    } else if (this.isSecondaryField(fieldIndex)) {
      player.score -= actualScore;
      if (this.settings.handover) {
        const player = this.game.players.find(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
        if (player) {
          player.score += actualScore;
        }
      }
    } else {
      state.ownFields.push(fieldIndex);
    }
  }

  checkPlayerState(player: Player) {
    this.game.players.forEach(p => p.setWin(p.score >= this.settings.targetPoint));
    const activePlayers = this.game.players.filter(p => !this.isInactive(p));
    if (activePlayers.length === 1) {
      activePlayers[0].setWin(true);
    }
    if (!activePlayers) {
      player.setWin(true);
    } else {
      if (this.game.isTheLastThrow()) {
        this.game.nextPlayer();
      }
      while (this.isInactive(this.game.getActualPlayer())) {
        this.game.nextPlayer();
      }
    }
  }

  isInactive(player: Player): boolean {
    return player.score <= 0;
  }

  isPrimaryField(fieldIndex: number): boolean {
    const state = this.getPlayerState(this.game.getActualPlayer());
    return state.ownFields.some(i => i === fieldIndex);
  }

  isSecondaryField(fieldIndex: number): boolean {
    return !this.settings.isFieldAllowed(fieldIndex) ||
      this.game.players.some(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
  }

  customReset() {
    this.game.players.forEach(player => {
      player.state = new DuelState();
      player.score = this.settings.startPoint;
    });
  }
}
