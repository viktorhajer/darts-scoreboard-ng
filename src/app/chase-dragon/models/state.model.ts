import {PlaygroundState} from '~models/playground-state.model';
import {Player} from '~models/player.model';

export class ChaseDragonState extends PlaygroundState {

  actFieldIndex: number;
  bullCount: number;

  constructor(player: Player) {
    super(player);
    this.actFieldIndex = 0;
    this.bullCount = 0;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  clone(): ChaseDragonState {
    const state: ChaseDragonState = new ChaseDragonState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    state.bullCount = this.bullCount;
    return state;
  }
}
