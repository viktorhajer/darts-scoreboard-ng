import {PlaygroundState} from '~models/playground-state.model';
import {FieldValue} from '~models/field-value.model';
import {Player} from '~models/player.model';

export class CricketState extends PlaygroundState {

  fieldCount: FieldValue[];
  punishCount: FieldValue[];
  actFieldIndex: number;

  constructor(player: Player) {
    super(player);
    this.fieldCount = [];
    this.punishCount = [];
    this.actFieldIndex = 0;
  }

  getFieldCount(field: string): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  setFieldCount(field: string, value: number) {
    this.getFieldValue(this.fieldCount, field).value = value;
  }

  getPunishCount(field: string): number {
    return this.getFieldValue(this.punishCount, field).value;
  }

  setPunishCount(field: string, value: number) {
    this.getFieldValue(this.punishCount, field).value = value;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex() {
    this.actFieldIndex++;
  }

  clone(): CricketState {
    const state: CricketState = new CricketState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.punishCount.forEach(fv => state.punishCount.push(fv.clone()));
    return state;
  }
}
