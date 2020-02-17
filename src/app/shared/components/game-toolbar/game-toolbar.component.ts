import {Component, Input} from '@angular/core';
import {Playground} from '~models/playground.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent {

  @Input() playground: Playground<PlaygroundState>;

  constructor(public route: Router) {
  }

  quit() {
    this.route.navigate(['/']);
    this.playground.game.resetScore();
    this.playground.multiplier = 1;
    this.playground.extraEndingMsg = '';
  }

  showSettings() {
    this.playground.reset();
    this.playground.settingsOpen = true;
  }
}
