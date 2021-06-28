export class HareAndHoundSettings {
  houndStartIndex: number;
  hareStartIndex: number;

  constructor() {
    this.houndStartIndex = 13;
    this.hareStartIndex = 19;
  }

  getSelectableHoundStart(): number[] {
    return [7, 16, 8, 11, 14, 9, 12, 5, 20];
  }

  setHoundStart(value: number) {
    this.houndStartIndex = value;
  }

  getFields(): number[] {
    const index = HareAndHoundSettings.getBaseFields().indexOf(this.houndStartIndex);
    return [...HareAndHoundSettings.getBaseFields().slice(index), ...HareAndHoundSettings.getBaseFields().slice(0, index)];
  }

  getHareStartIndex(): number {
    return this.getFields().indexOf(this.hareStartIndex);
  }

  private static getBaseFields(): number[] {
    return [19, 0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4];
  }
}
