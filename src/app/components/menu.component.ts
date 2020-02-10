import {Component, EventEmitter, Output} from '@angular/core';
import {GameType} from '../models/game-type.model';
import {X01Playground} from '../games/x01.playground';
import {AroundClockPlayground} from '../games/aroundclock.playground';
import {CricketPlayground} from '../games/cricket.playground';
import {ShanghaiPlayground} from '../games/shanghai.playground';
import {KillerPlayground} from '../games/killer.playground';
import {ChaseDragonPlayground} from '../games/chaseDragon.playground';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  @Output() select = new EventEmitter<GameType>();

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
