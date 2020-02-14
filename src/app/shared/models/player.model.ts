import {Throw} from './throw.model';
import {PlaygroundState} from '~models/playground-state.model';

export class Player {
  id: number;
  name = '';
  score = 0;
  throws: number[] = [];
  throwsHistory: Throw[];
  win = false;
  first = true;
  state: PlaygroundState;

  constructor(id: number) {
    this.id = id;
  }

  getThrowsTotal(): number {
    return this.throws.reduce((a, b) => a + b, 0);
  }

  addThrowHistory(thr: Throw) {
    this.throwsHistory.push(thr);
  }

  reset() {
    this.score = 0;
    this.throws = [];
    this.throwsHistory = [];
    this.win = false;
    this.first = true;
  }

  clone(): Player {
    const player = new Player(this.id);
    player.name = this.name;
    player.score = this.score;
    player.throws = [];
    this.throws.forEach(t => {
      player.throws.push(t);
    });
    player.throwsHistory = this.throwsHistory;
    player.win = this.win;
    player.first = this.first;
    player.throwsHistory = [];
    this.throwsHistory.forEach(throws => {
      player.throwsHistory.push(throws.clone());
    });
    return player;
  }
}
