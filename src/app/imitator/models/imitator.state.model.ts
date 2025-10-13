import {PlaygroundState} from '../../shared/models/playground-state.model';

export class ImitatorState extends PlaygroundState {

  actFieldIndex: number;
  punished: boolean;

  constructor() {
    super();
    this.actFieldIndex = Math.floor(Math.random() * 20);
    this.punished = false;
  }

  clone(): ImitatorState {
    const state = new ImitatorState();
    state.actFieldIndex = this.actFieldIndex;
    state.punished = this.punished;
    return state;
  }
}
