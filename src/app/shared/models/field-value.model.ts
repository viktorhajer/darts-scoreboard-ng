export class FieldValue {
  field: number;
  value: number;

  constructor(field: number, value: number) {
    this.field = field;
    this.value = value;
  }

  clone(): FieldValue {
    return new FieldValue(this.field, this.value);
  }
}
