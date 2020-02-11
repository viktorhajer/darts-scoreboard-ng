export class Settings {
  fields: string[];
  long = false;

  constructor() {
    this.setFields();
  }

  toggleLong() {
    this.long = !this.long;
    this.setFields();
  }

  setFields() {
    this.fields = [];
    for (let i = (this.long ? 9 : 14); i < 21; i++) {
      let nm: string = i == 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }
}
