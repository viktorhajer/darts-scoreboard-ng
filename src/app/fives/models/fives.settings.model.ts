export class FivesSettings {
  divider: number;
  limit: number;
  noCheat: boolean;

  constructor() {
    this.divider = 5;
    this.limit = 20;
    this.noCheat = true;
  }

  getSelectableDividers(): number[] {
    return [3, 4, 5, 6, 7, 8, 10];
  }

  getSelectableLimits(): number[] {
    return [10, 20, 30, 50, 100];
  }

  setDivider(value: number) {
    this.divider = value;
  }

  setLimit(value: number) {
    this.limit = value;
  }

  toggleNoCheat() {
    this.noCheat = !this.noCheat;
  }
}
