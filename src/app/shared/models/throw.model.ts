export class Throw {
  field: string;
  field_num: number;
  multi: number;
  order: number;

  constructor(field_num: number, multi: number, order: number) {
    this.field_num = field_num;
    this.field = field_num == 25 ? 'B' : field_num + '';
    this.multi = multi;
    this.order = order;
  }

  clone(): Throw {
    return new Throw(this.field_num, this.multi, this.order);
  }
}
