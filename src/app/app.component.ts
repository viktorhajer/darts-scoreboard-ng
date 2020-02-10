import {Component, ViewChild} from '@angular/core';
import {PlaygroundContainer} from './components/playground.container';
import {CricketPlayground} from './games/cricket.playground';
import {ShanghaiPlayground} from './games/shanghai.playground';
import {X01Playground} from './games/x01.playground';
import {AroundClockPlayground} from './games/aroundclock.playground';
import {KillerPlayground} from './games/killer.playground';
import {ChaseDragonPlayground} from './games/chaseDragon.playground';
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

  getGameList(): GameType[] {
    return [
      new GameType('Classic X01', X01Playground),
      new GameType('Around The Clock', AroundClockPlayground),
      new GameType('Ultimate Cricket', CricketPlayground),
      new GameType('Shanghai / Halve It', ShanghaiPlayground),
      new GameType('Killer', KillerPlayground),
      new GameType('Chase the Dragon', ChaseDragonPlayground)
    ];
  }
}
