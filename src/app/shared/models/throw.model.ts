export class Throw {
  field: string;
  fieldNum: number;
  multi: number;
  order: number;

  constructor(fieldNum: number, multi: number, order: number) {
    this.fieldNum = fieldNum;
    this.field = fieldNum === 25 ? 'B' : fieldNum + '';
    this.multi = multi;
    this.order = order;
  }

  clone(): Throw {
    return new Throw(this.fieldNum, this.multi, this.order);
  }
}
