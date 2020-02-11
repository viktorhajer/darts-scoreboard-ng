export class Settings {
  fields: string[];
  jump: boolean;

  constructor() {
    this.jump = true;
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      let nm: string = i == 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }

  toggleJump() {
    this.jump = !this.jump;
  }
}
