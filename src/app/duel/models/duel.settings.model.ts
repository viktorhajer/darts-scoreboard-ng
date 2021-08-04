import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class DuelSettings extends CricketSettings {
  startPoint: number;
  targetPoint: number;

  constructor() {
    super();
    this.high();
    this.startPoint = 100;
    this.targetPoint = 200;
  }
}
