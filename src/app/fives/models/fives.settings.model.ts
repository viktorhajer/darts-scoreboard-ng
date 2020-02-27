export class FivesSettings {
  divider: number;
  limit: number;

  constructor() {
    this.divider = 5;
    this.limit = 30;
  }

  getSelectableDividers(): number[] {
    return [3, 4, 5, 6, 7, 8, 10];
  }

  getSelectableLimits(): number[] {
    return [30, 50, 100];
  }

  setDivider(value: number) {
    this.divider = value;
  }

  setLimit(value: number) {
    this.limit = value;
  }
}
