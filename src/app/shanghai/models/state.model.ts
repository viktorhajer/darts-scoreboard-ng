import {PlaygroundState} from '~models/playground-state.model';
import {FieldValue} from '~models/field-value.model';

export class ShanghaiState extends PlaygroundState {

  fieldCount: FieldValue[];
  fieldScore: FieldValue[];

  constructor() {
    super();
    this.fieldCount = [];
    this.fieldScore = [];
  }

  getFieldCount(field: string): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  increaseFieldCount(field: string, value: number) {
    this.getFieldValue(this.fieldCount, field).value += value;
  }

  getFieldScore(field: string): number {
    return this.getFieldValue(this.fieldScore, field).value;
  }

  increaseFieldScore(field: string, value: number) {
    this.getFieldValue(this.fieldScore, field).value += value;
  }

  clone(): ShanghaiState {
    const state: ShanghaiState = new ShanghaiState();
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.fieldScore.forEach(fv => state.fieldScore.push(fv.clone()));
    return state;
  }
}
