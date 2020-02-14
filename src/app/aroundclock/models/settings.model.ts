export class Settings {
  jump: boolean;
  punishment: boolean;

  constructor() {
    this.jump = true;
    this.punishment = false;
  }

  toggleJump() {
    this.jump = !this.jump;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }
}
