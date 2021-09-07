export class KnockoutSettings {
  numberOfLives: number;
  killer: boolean;

  constructor() {
    this.numberOfLives = 5;
    this.killer = true;
  }

  toggleKiller() {
    this.killer = !this.killer;
  }
}
