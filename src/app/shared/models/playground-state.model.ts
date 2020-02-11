import {Player} from './player.model';
import {FieldValue} from './field-value.model';

export abstract class PlaygroundState {

  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  getFieldValue(list: FieldValue[], field: string): FieldValue {
    const filtered = list.filter(f => f.field == field);
    if (filtered.length == 0) {
      list.push(new FieldValue(field, 0));
    }
    return list.filter(f => f.field == field)[0];
  }

  abstract clone(): PlaygroundState;
}