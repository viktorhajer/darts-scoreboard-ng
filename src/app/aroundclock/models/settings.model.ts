export class Settings {
  fields: string[];
  jump: boolean;
  punishment: boolean;

  constructor() {
    this.jump = true;
    this.punishment = false;
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      const nm = i === 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }

  toggleJump() {
    this.jump = !this.jump;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }
}
