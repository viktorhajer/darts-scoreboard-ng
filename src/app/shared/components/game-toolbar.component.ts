import {Component, Input} from '@angular/core';
import {PlaygroundModel} from '../models/playground.model';
import {GameService} from '../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html'
})
export class GameToolbarComponent {
  @Input() playground: PlaygroundModel;

  constructor(public game: GameService, public route: Router){
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
