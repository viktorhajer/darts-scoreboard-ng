import {PlaygroundState} from '../../shared/models/playground-state.model';

export class DuelState extends PlaygroundState {

  ownFields: number[] = [];

  constructor() {
    super();
  }

  clone(): DuelState {
    const state = new DuelState();
    state.ownFields = [...this.ownFields];
    return state;
  }
}
