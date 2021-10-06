import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class DuelSettings extends CricketSettings {
  startPoint: number;
  targetPoint: number;
  punishment: number;
  handover: boolean;

  constructor() {
    super();
    this.star();
    this.startPoint = 30;
    this.targetPoint = 200;
    this.punishment = 10;
    this.handover = true;
  }

  star() {
    this.setAllowedField([20, 1, 4, 13, 6, 15, 2, 3, 19, 16, 8, 14, 9]);
  }

  cross() {
    this.setAllowedField([5, 20, 18, 4, 6, 10, 2, 17, 7, 16, 11, 14]);
  }

  toggleHandOver() {
    this.handover = !this.handover;
  }
}
