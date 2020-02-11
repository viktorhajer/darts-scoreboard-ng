import {Component, Input} from '@angular/core';
import {PlaygroundModel} from '../models/playground.model';
import {GameService} from '../services/game.service';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html'
})
export class GameToolbarComponent {

  @Input() playground: PlaygroundModel<PlaygroundState>;

  constructor(public game: GameService, public route: Router) {
  }

  quit() {
    this.route.navigate(['/menu']);
    this.game.resetScore();
  }

  showSettings() {
    this.playground.reset();
    this.playground.settingsOpen = true;
  }
}
