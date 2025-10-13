import {PlaygroundState} from '../../shared/models/playground-state.model';

export class ScamState extends PlaygroundState {

  ownFields: number[] = [];

  constructor() {
    super();
  }

  clone(): ScamState {
    const state = new ScamState();
    state.ownFields = [...this.ownFields];
    return state;
  }
}
