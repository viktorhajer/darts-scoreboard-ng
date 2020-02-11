export class Settings {

  fields: string[] = ['15', '16', '17', '18', '19', '20', 'B'];
  numbs: boolean[] = [];
  style: number;

  constructor() {
    this.style = 2;
    let defaultSet = false;
    for (let i = 0; i < 21; i++) {
      this.numbs[i] = defaultSet;
      if (i == 13) defaultSet = true;
    }
    this.initFields();
  }

  randomize() {
    for (let i = 0; i < this.numbs.length; i++) this.numbs[i] = false;
    for (let i = 0; i < 7; i++) this.numbs[Math.floor(Math.random() * 21)] = true;
    this.initFields();
  }

  upper() {
    this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
  }

  lower() {
    this.setAllowedField([10, 15, 2, 17, 3, 19, 7, 16, 8, 21]);
  }

  odd() {
    this.setAllowedField([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
  }

  even() {
    this.setAllowedField([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21]);
  }

  private setAllowedField(fields: number[]) {
    for (let i = 0; i < this.numbs.length; i++) this.numbs[i] = false;
    for (let i = 0; i < fields.length; i++) this.numbs[fields[i] - 1] = true;
    this.initFields();
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < 21; i++) {
      numbers[i] = (i + 1);
    }
    return numbers;
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
        this.fields.push(i == 20 ? 'B' : ((i + 1) + ''));
      }
    }
  }

  isScoreGame(): boolean {
    return this.style == 1;
  }

  isPunishGame(): boolean {
    return this.style == 2;
  }

  isNoScoreGame(): boolean {
    return this.style == 3;
  }

  isBlackOutGame(): boolean {
    return this.style == 4;
  }
}