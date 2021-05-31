import {FIELDS_COUNT} from '~models/playground.model';

export class ConquerorSettings {

  fields: number[];
  style = 1;
  noScore = false;

  constructor() {
    this.fields = [];
    this.noScore = false;
    this.style = 1;
    this.randomCountry();
  }

  randomCity() {
    this.style = 0;
    this.fields = ConquerorSettings.getRandom(5);
    this.fields[this.fields.length] = 20;
  }

  randomCountry() {
    this.style = 1;
    this.fields = ConquerorSettings.getRandom(10);
    this.fields[this.fields.length] = 20;
  }

  randomContinent() {
    this.style = 2;
    this.fields = ConquerorSettings.getRandom(20);
    this.fields[this.fields.length] = 20;
  }

  toggleNoScore() {
    this.noScore = !this.noScore;
  }

  private static getBaseFields(): number[] {
    return [...Array(FIELDS_COUNT).keys()];
  }

  private static getRandom(size?: number): number[] {
    let fields = ConquerorSettings.getBaseFields();
    if (!size) {
      size = fields.length;
    }
    const randomFields = [];
    for (let i = (size - 1); i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      if (fields[random] === 20) {
        i++;
      } else {
        randomFields.push(fields[random]);
        fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
      }
    }
    return randomFields;
  }
}
