export class Throw {
  field: string;

  constructor(public score: number, public multi: number, public order: number) {
    this.field = this.score === 25 ? 'B' :  this.score + '';
  }

  clone(): Throw {
    return new Throw(this.score, this.multi, this.order);
  }
}
