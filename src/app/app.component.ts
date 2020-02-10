import {Component, ViewChild} from '@angular/core';
import {PlaygroundContainer} from './components/playground.container';
import {GameType} from './models/game-type.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  @ViewChild(PlaygroundContainer) playgroundContainer: PlaygroundContainer;

  selectGame(gameType: GameType) {
    this.playgroundContainer.createGame(gameType);
  }
}
