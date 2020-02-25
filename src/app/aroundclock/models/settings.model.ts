import {FIELDS_COUNT} from '~models/playground.model';

export class Settings {
  jump: boolean;
  punishment: boolean;
  style: number;
  fields: number[];

  constructor() {
    this.style = 0;
    this.jump = true;
    this.punishment = false;
    this.fields = this.getBaseFields();
  }

  setStyle(style: number) {
    this.style = style;
    switch (this.style) {
      case 1:
        this.fields = this.getClockFields();
        break;
      case 2:
        this.fields = this.getAnciclockFields();
        break;
      case 3:
        this.fields = this.getRandom();
        break;
      default:
        this.fields = this.getBaseFields();
    }
  }

  toggleJump() {
    this.jump = !this.jump;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }

  private getBaseFields(): number[] {
    return [...Array(FIELDS_COUNT).keys()];
  }

  private getClockFields(): number[] {
    return [0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4, 19, 20];
  }

  private getAnciclockFields(): number[] {
    return [19, 4, 11, 8, 13, 10, 7, 15, 6, 18, 2, 16, 1, 14, 9, 5, 12, 3, 17, 0, 20];
  }

  private getRandom(): number[] {
    let fields = this.getBaseFields();
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
