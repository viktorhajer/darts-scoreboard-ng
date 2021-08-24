export class KnockoutSettings {
  numberOfLives: number;
  killer: boolean;

  constructor() {
    this.numberOfLives = 5;
    this.killer = false;
  }

  toggleKiller() {
    this.killer = !this.killer;
  }
}
