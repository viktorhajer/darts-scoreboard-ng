import {PlaygroundState} from '~models/playground-state.model';

export class AroundClockState extends PlaygroundState {

  actFieldIndex: number;

  constructor(public life = 3) {
    super();
    this.actFieldIndex = 0;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  decreaseActFieldIndex(value?: number) {
    this.actFieldIndex -= value;
    if (this.actFieldIndex < 0) {
      this.actFieldIndex = 0;
    }
  }

  isInactive(): boolean {
    return this.life <= 0;
  }

  clone(): AroundClockState {
    const state = new AroundClockState(this.life);
    state.actFieldIndex = this.actFieldIndex;
    return state;
  }
}
