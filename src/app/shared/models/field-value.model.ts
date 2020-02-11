export class FieldValue {
  field: string;
  value: number;

  constructor(field: string, value: number) {
    this.field = field;
    this.value = value;
  }

  clone(): FieldValue {
    return new FieldValue(this.field, this.value);
  }
}
