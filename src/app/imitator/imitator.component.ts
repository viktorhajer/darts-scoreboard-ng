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

@Component({
  templateUrl: './imitator.component.html',
  animations: [slideInAnimation],
})
export class ImitatorComponent extends Playground<ImitatorState> {

  settings: ImitatorSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService) {
    super(application, game, route, dialogService, soundService);
    this.nextEnabled = false;
    this.zeroEnabled = false;
    this.multiEnabled = false;
    this.settings = new ImitatorSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.game.actualThrow === 1) {
      state.punished = fieldIndex !== state.actFieldIndex;
      this.multiEnabled = true;
      this.zeroEnabled = true;
    } else if (this.game.actualThrow === 2) {
      player.score += (state.punished ? score * -1 : score) * this.multiplier;
      this.multiEnabled = false;
      this.zeroEnabled = false;
    } else {
      this.game.nextPlayer();
      this.getPlayerState(this.game.getActualPlayer()).actFieldIndex = fieldIndex;
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
}
