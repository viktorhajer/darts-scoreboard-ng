import {PlaygroundState} from '~models/playground-state.model';

export class KillerState extends PlaygroundState {

  actField: number;
  killer: boolean;

  constructor(public life = 5, public boarding = 3) {
    super();
    this.actField = 0;
    this.killer = false;
  }

  isInactive(): boolean {
    return this.life <= 0;
  }

  clone(): KillerState {
    const state: KillerState = new KillerState();
    state.actField = this.actField;
    state.life = this.life;
    state.boarding = this.boarding;
    state.killer = this.killer;
    return state;
  }
}
