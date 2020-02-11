export class Settings {

  startValue: number = 301;
  start: number = 1;
  checkout: number = 1;

  isNormalStart(): boolean {
    return this.start == 1;
  }

  isDoubleStart(): boolean {
    return this.start == 2;
  }

  isTripleStart(): boolean {
    return this.start == 3;
  }

  isNormalCheckout(): boolean {
    return this.checkout == 1;
  }

  isDoubleCheckout(): boolean {
    return this.checkout == 2;
  }

  isTripleCheckout(): boolean {
    return this.checkout == 3;
  }

  isHighScoreGame(): boolean {
    return this.checkout == 4;
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
}
