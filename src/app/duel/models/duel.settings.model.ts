import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class DuelSettings extends CricketSettings {
  startPoint: number;
  targetPoint: number;
  punishment: number;
  handover: boolean;

  constructor() {
    super();
    this.black();
    this.startPoint = 30;
    this.targetPoint = 200;
    this.punishment = 10;
    this.handover = true;
  }

  toggleHandOver() {
    this.handover = !this.handover;
  }
}
