export class Settings {
  houndStartIndex: number;
  hareStartIndex: number;

  constructor() {
    this.houndStartIndex = 11;
    this.hareStartIndex = 19;
  }

  getSelectableHoundStart(): number[] {
    return [14, 9, 12, 5, 20];
  }

  setHoundStart(value: number) {
    this.houndStartIndex = value;
  }

  getFields(): number[] {
    const index = this.getBaseFields().indexOf(this.houndStartIndex);
    return [...this.getBaseFields().slice(index), ...this.getBaseFields().slice(0, index)];
  }

  getHareStartIndex(): number {
    return this.getFields().indexOf(this.hareStartIndex);
  }

  private getBaseFields(): number[] {
    return [19, 0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4];
  }
}
