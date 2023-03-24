import {PlaygroundState} from '~models/playground-state.model';

export class ScamState extends PlaygroundState {

  ownFields = [];

  constructor() {
    super();
  }

  clone(): ScamState {
    const state = new ScamState();
    state.ownFields = [...this.ownFields];
    return state;
  }
}
