import {PlaygroundState} from '~models/playground-state.model';

export class HareAndHoundState extends PlaygroundState {

  constructor(public actFieldIndex: number) {
    super();
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

  clone(): HareAndHoundState {
    return new HareAndHoundState(this.actFieldIndex);
  }
}
