import {PlaygroundState} from '../../shared/models/playground-state.model';

export class KnockoutState extends PlaygroundState {

  constructor(public score = 0) {
    super();
  }

  clone(): KnockoutState {
    return new KnockoutState(this.score);
  }
}
