import {FieldValue} from './field-value.model';

export abstract class PlaygroundState {

  getFieldValue(list: FieldValue[], fieldIndex: number): FieldValue {
    const filtered = list.filter(f => f.field === fieldIndex);
    if (filtered.length === 0) {
      list.push(new FieldValue(fieldIndex, 0));
    }
    return list.filter(f => f.field === fieldIndex)[0];
  }

  abstract clone(): PlaygroundState;
}
