export class X01Settings {

  startValue = 201;
  start = 1;
  checkout = 2;
  punishment = false;
  saboteur = true;

  isNormalStart(): boolean {
    return this.start === 1;
  }

  isDoubleStart(): boolean {
    return this.start === 2;
  }

  isTripleStart(): boolean {
    return this.start === 3;
  }

  isNormalCheckout(): boolean {
    return this.checkout === 1;
  }

  isDoubleCheckout(): boolean {
    return this.checkout === 2;
  }

  isTripleCheckout(): boolean {
    return this.checkout === 3;
  }

  isHighScoreGame(): boolean {
    return this.checkout === 4;
  }

  setStart(start: number) {
    this.start = start;
  }

  setCheckout(checkout: number) {
    this.checkout = checkout;
  }

  setStartValue(startValue: number) {
    this.startValue = startValue;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
    if (this.punishment) {
      this.saboteur = false;
    }
  }

  toggleSaboteur() {
    this.saboteur = !this.saboteur;
    if (this.saboteur) {
      this.punishment = false;
    }
  }
}
