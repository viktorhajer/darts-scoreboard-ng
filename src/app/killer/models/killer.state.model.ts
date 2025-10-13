import {PlaygroundState} from '../../shared/models/playground-state.model';

export class KillerState extends PlaygroundState {

  actField: number;
  killer: boolean;

  constructor(public boarding = 3) {
    super();
    this.actField = -1;
    this.killer = false;
  }

  clone(): KillerState {
    const state = new KillerState(this.boarding);
    state.actField = this.actField;
    state.killer = this.killer;
    return state;
  }
}
