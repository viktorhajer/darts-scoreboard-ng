import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class ScamSettings extends CricketSettings {

  stopper = false;
  punishment = false;
  reverse = false;
  punishmentValue = 15;

  constructor() {
   super();
   this.style = 1;
   this.all();
  }

  toggleStopper() {
    this.stopper = !this.stopper;
  }

  toggleReverse() {
    this.reverse = !this.reverse;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }
}
