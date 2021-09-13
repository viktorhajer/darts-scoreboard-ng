import {FIELDS_COUNT} from '~models/playground.model';

export class CaptureTheFlagSettings {

  fields: number[];
  style: number;
  noScore = false;

  constructor() {
    this.fields = [];
    this.noScore = false;
    this.randomCountry();
  }

  randomCity() {
    this.style = 0;
    this.fields = CaptureTheFlagSettings.getRandom(5);
    this.fields[this.fields.length] = 20;
  }

  randomCountry() {
    this.style = 1;
    this.fields = CaptureTheFlagSettings.getRandom(10);
    this.fields[this.fields.length] = 20;
  }

  randomContinent() {
    this.style = 2;
    this.fields = CaptureTheFlagSettings.getRandom(20);
    this.fields[this.fields.length] = 20;
  }

  toggleNoScore() {
    this.noScore = !this.noScore;
  }

  private static getBaseFields(): number[] {
    return [...Array(FIELDS_COUNT).keys()];
  }

  private static getRandom(size?: number): number[] {
    let fields = CaptureTheFlagSettings.getBaseFields();
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
    return randomFields.sort((a, b) => Number(a) - Number(b));
  }
}
