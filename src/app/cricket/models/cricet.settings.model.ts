export class CricketSettings {

  fields: number[] = [14, 15, 16, 17, 18, 19, 20];
  numbs: boolean[] = [];
  style: number;

  constructor() {
    this.style = 2;
    let defaultSet = false;
    for (let i = 0; i < 21; i++) {
      this.numbs[i] = defaultSet;
      if (i === 13) {
        defaultSet = true;
      }
    }
    this.initFields();
  }

  randomize(maxField: number) {
    for (let i = 0; i < this.numbs.length; i++) {
      this.numbs[i] = false;
    }
    while(this.numbs.filter(n => !!n).length !== maxField) {
      this.numbs[Math.floor(Math.random() * 21)] = true;
    }
    this.numbs[this.numbs.length - 1] = true;
    this.initFields();
  }

  all() {
    this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
  }

  small() {
    this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21]);
  }

  high() {
    this.setAllowedField([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
  }

  star() {
    this.setAllowedField([20, 18, 13, 10, 2, 3, 7, 8, 14, 12, 21]);
  }

  reverseStar() {
    this.setAllowedField([1, 4, 6, 15, 17, 19, 16, 11, 9, 5, 21]);
  }

  cross() {
    this.setAllowedField([5, 20, 1, 19, 3, 17, 14, 8, 11, 6, 13, 10, 21]);
  }

  upper() {
    this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
  }

  lower() {
    this.setAllowedField([10, 15, 2, 17, 3, 19, 7, 16, 8, 21]);
  }

  left() {
    this.setAllowedField([12, 9, 14, 11, 8, 16, 7, 5, 19, 21]);
  }

  right() {
    this.setAllowedField([1, 18, 4, 13, 6, 10, 15, 2, 17, 21]);
  }

  odd() {
    this.setAllowedField([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
  }

  even() {
    this.setAllowedField([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21]);
  }

  prime() {
    this.setAllowedField([2, 3, 5, 7, 11, 13, 17, 19, 21]);
  }

  notPrime() {
    this.setAllowedField([1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21]);
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < 21; i++) {
      numbers[i] = (i + 1);
    }
    return numbers;
  }

  isFieldAllowed(field: number): boolean {
    return !!this.numbs[field];
  }

  setNumber(i: number) {
    this.numbs[i] = !this.numbs[i];
    this.initFields();
  }

  setStyle(style: number) {
    this.style = style;
  }

  initFields() {
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      if (this.numbs[i]) {
        this.fields.push(i);
      }
    }
  }

  isScoreGame(): boolean {
    return this.style === 1;
  }

  isPunishGame(): boolean {
    return this.style === 2;
  }

  isNoScoreGame(): boolean {
    return this.style === 3;
  }

  isBlackOutGame(): boolean {
    return this.style === 4;
  }

  setAllowedField(fields: number[]) {
    for (let i = 0; i < this.numbs.length; i++) {
      this.numbs[i] = false;
    }
    fields.forEach(f => this.numbs[f - 1] = true);
    this.initFields();
  }
}
