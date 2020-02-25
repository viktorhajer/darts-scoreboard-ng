import {PlaygroundState} from '~models/playground-state.model';

export class KnockoutState extends PlaygroundState {

  constructor(public life = 5) {
    super();
  }

  isInactive(): boolean {
    return this.life <= 0;
  }

  clone(): KnockoutState {
    const state = new KnockoutState();
    state.life = this.life;
    return state;
  }
}
