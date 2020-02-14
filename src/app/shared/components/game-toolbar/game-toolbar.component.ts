import {Component, Input} from '@angular/core';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent {

  @Input() playground: PlaygroundModel<PlaygroundState>;

  constructor(public game: GameService, public route: Router) {
  }

  quit() {
    this.route.navigate(['/']);
    this.game.resetScore();
    this.playground.multiplier = 1;
    this.playground.extraEndingMsg = '';
  }

  showSettings() {
    this.playground.reset();
    this.playground.settingsOpen = true;
  }
}
