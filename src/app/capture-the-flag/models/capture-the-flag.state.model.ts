import {PlaygroundState} from '~models/playground-state.model';
import {FieldValue} from '~models/field-value.model';

export class CaptureTheFlagState extends PlaygroundState {

  actFieldIndex: number;
  fieldCount: FieldValue[];

  constructor() {
    super();
    this.fieldCount = [];
    this.actFieldIndex = 0;
  }

  getFieldCount(field: number): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  increaseFieldCount(field: number, value: number) {
    this.getFieldValue(this.fieldCount, field).value += value;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex() {
    this.actFieldIndex++;
  }

  clone(): CaptureTheFlagState {
    const state = new CaptureTheFlagState();
    state.actFieldIndex = this.actFieldIndex;
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    return state;
  }
}
