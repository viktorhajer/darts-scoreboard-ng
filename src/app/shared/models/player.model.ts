import {Throw} from './throw.model';
import {PlaygroundState} from '~models/playground-state.model';

export class Player {
  score = 0;
  throws: number[] = [];
  throwsHistory: Throw[];
  win = false;
  winDateTime = 0;
  first = true;
  state: PlaygroundState;

  constructor(public id: number, public name = '') {
  }

  setWin(win = true) {
    this.win = win;
    this.winDateTime = win ? new Date().getTime() : 0;
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
    this.winDateTime = 0;
    this.first = true;
  }

  clone(): Player {
    const player = new Player(this.id, this.name);
    player.score = this.score;
    player.throws = [];
    this.throws.forEach(t => {
      player.throws.push(t);
    });
    player.throwsHistory = this.throwsHistory;
    player.win = this.win;
    player.winDateTime = this.winDateTime;
    player.first = this.first;
    player.throwsHistory = [];
    this.throwsHistory.forEach(throws => {
      player.throwsHistory.push(throws.clone());
    });
    if (this.state) {
      player.state = this.state.clone();
    }
    return player;
  }
}
