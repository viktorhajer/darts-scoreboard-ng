export class Settings {

  fields: number[];
  numbs: boolean[] = [];
  noScore: boolean;
  halveIt: boolean;

  constructor() {
    this.fields = [];
    this.noScore = false;
    this.halveIt = false;
    let defaultSet = true;
    for (let i = 0; i < 21; i++) {
      this.numbs[i] = defaultSet;
      if (i === 19) {
        defaultSet = false;
      }
    }
    this.initFields();
  }

  randomize() {
    for (let i = 0; i < this.numbs.length; i++) {
      this.numbs[i] = false;
    }
    for (let i = 0; i < 8; i++) {
      let rand = Math.floor(Math.random() * 21);
      while (this.numbs[rand]) {
        rand = Math.floor(Math.random() * 21);
      }
      this.numbs[rand] = true;
    }
    this.initFields();
  }

  toggleNoScore() {
    this.noScore = !this.noScore;
  }

  toggleHalveIt() {
    this.halveIt = !this.halveIt;
  }


  getNumbers() {
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

  initFields() {
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      if (this.numbs[i]) {
        this.fields.push(i);
      }
    }
  }
}
