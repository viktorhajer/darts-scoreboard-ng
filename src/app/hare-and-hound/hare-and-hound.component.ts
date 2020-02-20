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
  templateUrl: './hare-and-hound.component.html',
  animations: [slideInAnimation]
})
export class HareAndHoundComponent extends Playground<PlaygroundState> {

  settings: Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService, 2, 2);
    this.settings = new Settings();
  }

  customReset() {
    // this.game.players.forEach(player => player.score = this.settings.limit);
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {

    console.log(this.settings.getFields());

    if (this.game.actualThrow === 3) {
      let sum = 0;
      for (let i = 0; i < 3; i++) {
        const t = player.throwsHistory[player.throwsHistory.length - i - 1];
        sum += t.score * t.multi;
      }
    }
  }

  checkPlayerState(player: Player) {
    this.game.players.forEach(p => p.setWin(p.score <= 0));
    if (this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }
  }
}
