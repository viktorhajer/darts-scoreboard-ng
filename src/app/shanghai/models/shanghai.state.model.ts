import {PlaygroundState} from '../../shared/models/playground-state.model';
import {FieldValue} from '../../shared/models/field-value.model';

export class ShanghaiState extends PlaygroundState {

  fieldCount: FieldValue[];
  fieldScore: FieldValue[];

  constructor() {
    super();
    this.fieldCount = [];
    this.fieldScore = [];
  }

  getFieldCount(field: number): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  increaseFieldCount(field: number, value: number) {
    this.getFieldValue(this.fieldCount, field).value += value;
  }

  getFieldScore(field: number): number {
    return this.getFieldValue(this.fieldScore, field).value;
  }

  increaseFieldScore(field: number, value: number) {
    this.getFieldValue(this.fieldScore, field).value += value;
  }

  clone(): ShanghaiState {
    const state = new ShanghaiState();
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.fieldScore.forEach(fv => state.fieldScore.push(fv.clone()));
    return state;
  }
}
