import {FIELDS_COUNT} from '~models/playground.model';

export class AroundClockSettings {
  jump: boolean;
  punishment: boolean;
  nineLives: boolean;
  style: number;
  fields: number[];

  constructor() {
    this.style = 0;
    this.jump = true;
    this.punishment = false;
    this.nineLives = false;
    this.fields = AroundClockSettings.getBaseFields();
  }

  setStyle(style: number) {
    this.style = style;
    switch (this.style) {
      case 1:
        this.fields = AroundClockSettings.getClockFields();
        break;
      case 2:
        this.fields = AroundClockSettings.getAnticlockFields();
        break;
      case 3:
        this.fields = AroundClockSettings.getRandom();
        break;
      default:
        this.fields = AroundClockSettings.getBaseFields();
    }
  }

  toggleJump() {
    this.jump = !this.jump;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
    if (this.punishment) {
      this.nineLives = false;
    }
  }

  toggleNineLives() {
    this.nineLives = !this.nineLives;
    if (this.nineLives) {
      this.punishment = false;
    }
  }

  private static getBaseFields(): number[] {
    return [...Array(FIELDS_COUNT).keys()];
  }

  private static getClockFields(): number[] {
    return [0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4, 19, 20];
  }

  private static getAnticlockFields(): number[] {
    return [4, 11, 8, 13, 10, 7, 15, 6, 18, 2, 16, 1, 14, 9, 5, 12, 3, 17, 0, 19, 20];
  }

  private static getRandom(): number[] {
    let fields = AroundClockSettings.getBaseFields();
    const size = fields.length;
    const randomFields = [];
    for (let i = (size - 1); i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      randomFields.push(fields[random]);
      fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
    }
    return randomFields;
  }
}
