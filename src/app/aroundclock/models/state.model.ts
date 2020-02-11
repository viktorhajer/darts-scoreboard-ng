import {PlaygroundState} from '~models/playground-state.model';
import {Player} from '~models/player.model';

export class AroundClockState extends PlaygroundState {

  actFieldIndex: number;

  constructor(player: Player) {
    super(player);
    this.actFieldIndex = 0;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  clone(): AroundClockState {
    const state: AroundClockState = new AroundClockState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    return state;
  }
}
