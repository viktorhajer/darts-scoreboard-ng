import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class ScamSettings extends CricketSettings {

  stopper = false;
  punishment = false;

  constructor() {
   super();
   this.style = 1;
   this.all();
  }

  toggleStopper() {
    this.stopper = !this.stopper;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }
}
