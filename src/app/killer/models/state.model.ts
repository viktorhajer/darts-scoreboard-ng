import {PlaygroundState} from '~models/playground-state.model';
import {Player} from '~models/player.model';

export class KillerState extends PlaygroundState {

  actField: number;
  killer: boolean;
  dead: boolean;

  constructor(player: Player, public life = 5, public boarding = 3) {
    super(player);
    this.actField = 0;
    this.killer = false;
  }

  isDead(): boolean {
    return this.life <= 0;
  }

  clone(): KillerState {
    const state: KillerState = new KillerState(this.player);
    state.actField = this.actField;
    state.life = this.life;
    state.boarding = this.boarding;
    state.killer = this.killer;
    state.dead = this.dead;
    return state;
  }
}
