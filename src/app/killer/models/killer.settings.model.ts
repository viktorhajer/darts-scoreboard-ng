export class KillerSettings {
  numberOfLives: number;
  boardingLimit: number;
  suicide: boolean;

  constructor() {
    this.suicide = false;
    this.numberOfLives = 7;
    this.boardingLimit = 3;
  }

  toggleSuicide() {
    this.suicide = !this.suicide;
  }
}
