import {CricketSettings} from '../../cricket/models/cricet.settings.model';

export class ScamSettings extends CricketSettings {

  stopper = false;
  punishment = true;
  reverse = false;
  punishmentValue = 25;
  promoter = true;

  constructor() {
   super();
   this.style = 1;
   this.all();
  }

  toggleStopper() {
    this.promoter = true;
    this.stopper = !this.stopper;
  }

  toggleReverse() {
    this.reverse = !this.reverse;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }

  togglePromoter() {
    this.stopper = false;
    this.promoter = !this.promoter;
  }
}
