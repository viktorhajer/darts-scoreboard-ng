import {PlaygroundState} from '~models/playground-state.model';

export class DuelState extends PlaygroundState {

  ownFields = [];

  constructor() {
    super();
  }

  clone(): DuelState {
    const state = new DuelState();
    state.ownFields = [...this.ownFields];
    return state;
  }
}
