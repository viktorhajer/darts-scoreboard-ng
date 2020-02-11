export class Settings {
  fields: string[];
  numberOfLives: number;
  boardingLimit: number;

  constructor() {
    this.numberOfLives = 7;
    this.boardingLimit = 3;
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      let nm: string = i == 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }
}
