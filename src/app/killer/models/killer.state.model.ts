import {PlaygroundState} from '~models/playground-state.model';

export class KillerState extends PlaygroundState {

  actField: number;
  killer: boolean;

  constructor(public life = 5, public boarding = 3) {
    super();
    this.actField = -1;
    this.killer = false;
  }

  isInactive(): boolean {
    return this.life <= 0;
  }

  clone(): KillerState {
    const state = new KillerState(this.life, this.boarding);
    state.actField = this.actField;
    state.killer = this.killer;
    return state;
  }
}
