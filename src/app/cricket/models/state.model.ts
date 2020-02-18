import {PlaygroundState} from '~models/playground-state.model';
import {FieldValue} from '~models/field-value.model';

export class CricketState extends PlaygroundState {

  fieldCount: FieldValue[];
  punishCount: FieldValue[];
  actFieldIndex: number;

  constructor() {
    super();
    this.fieldCount = [];
    this.punishCount = [];
    this.actFieldIndex = 0;
  }

  getFieldCount(fieldIndex: number): number {
    return this.getFieldValue(this.fieldCount, fieldIndex).value;
  }

  setFieldCount(fieldIndex: number, value: number) {
    this.getFieldValue(this.fieldCount, fieldIndex).value = value;
  }

  getPunishCount(fieldIndex: number): number {
    return this.getFieldValue(this.punishCount, fieldIndex).value;
  }

  setPunishCount(fieldIndex: number, value: number) {
    this.getFieldValue(this.punishCount, fieldIndex).value = value;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex() {
    this.actFieldIndex++;
  }

  clone(): CricketState {
    const state: CricketState = new CricketState();
    state.actFieldIndex = this.actFieldIndex;
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.punishCount.forEach(fv => state.punishCount.push(fv.clone()));
    return state;
  }
}
