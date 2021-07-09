import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class ScamSettings extends CricketSettings {

  stopper = true;

  constructor() {
   super();
   this.style = 1;
  }

  toggleStopper() {
    this.stopper = !this.stopper;
  }
}
