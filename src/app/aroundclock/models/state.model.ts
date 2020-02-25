import {PlaygroundState} from '~models/playground-state.model';

export class AroundClockState extends PlaygroundState {

  actFieldIndex: number;

  constructor() {
    super();
    this.actFieldIndex = 0;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  decreaseActFieldIndex() {
    this.actFieldIndex--;
    if (this.actFieldIndex < 0) {
      this.actFieldIndex = 0;
    }
  }

  clone(): AroundClockState {
    const state = new AroundClockState();
    state.actFieldIndex = this.actFieldIndex;
    return state;
  }
}
