import {FIELDS_COUNT} from '../../shared/models/playground.model';

export class AroundClockSettings {
  jump: boolean;
  punishment: boolean;
  life: number;
  saboteur: boolean;
  promoter: boolean;
  style: number;
  fields: number[];
  firstDeath: boolean;
  palFirst: boolean;

  constructor() {
    this.style = 0;
    this.jump = true;
    this.firstDeath = true;
    this.punishment = true;
    this.life = 0;
    this.promoter = false;
    this.saboteur = true;
    this.palFirst = false;
    this.fields = AroundClockSettings.getBaseFields();
  }

  setStyle(style?: number) {
    if (!!style || style === 0) {
      this.style = style;
    }
    switch (this.style) {
      case 1:
        this.fields = AroundClockSettings.getClockFields();
        break;
      case 2:
        this.fields = AroundClockSettings.getAnticlockFields();
        break;
      case 3:
        this.fields = AroundClockSettings.getRandom();
        break;
      case 4:
        this.fields = [...AroundClockSettings.getBaseFields().reverse().slice(1), 20];
        break;
      case 5:
        this.fields = AroundClockSettings.getRecurrence();
        break;
      case 6:
        this.fields = AroundClockSettings.getRandom(11);
        break;
      case 7:
        this.fields = AroundClockSettings.getPirate();
        break;
      case 8:
        this.fields = AroundClockSettings.getTripleClockFields();
        break;
      case 9:
        this.fields = AroundClockSettings.getZoneClockFields();
        break;
      case 10:
        this.fields = AroundClockSettings.getZoneClockFields().reverse();
        break;
      default:
        this.fields = AroundClockSettings.getBaseFields();
    }
  }

  toggleFirstDeath() {
    this.firstDeath = !this.firstDeath;
  }

  togglePalFirst() {
    this.palFirst = !this.palFirst;
  }

  toggleJump() {
    this.jump = !this.jump;
  }

  togglePunishment() {
    this.punishment = !this.punishment;
  }

  toggleTreeLives() {
    this.life = this.life === 3 ? 0 : 3;
  }

  toggleFiveLives() {
    this.life = this.life === 5 ? 0 : 5;
  }

  toggleSevenLives() {
    this.life = this.life === 7 ? 0 : 7;
  }

  toggleTenLives() {
    this.life = this.life === 10 ? 0 : 10;
  }

  toggleSaboteur() {
    this.saboteur = !this.saboteur;
    if (this.saboteur) {
      this.promoter = false;
    }
  }

  togglePromoter() {
    this.promoter = !this.promoter;
    if (this.promoter) {
      this.saboteur = false;
    }
  }

  setFavorite() {
    this.style = 9;
    this.jump = true;
    this.firstDeath = true;
    this.punishment = true;
    this.life = 10;
    this.promoter = false;
    this.saboteur = true;
    this.palFirst = true;
    this.fields = AroundClockSettings.getZoneClockFields();
  }

  setInverseFavorite() {
    this.jump = true;
    this.style = 10;
    this.firstDeath = true;
    this.punishment = true;
    this.life = 10;
    this.promoter = false;
    this.saboteur = true;
    this.palFirst = true;
    this.fields = AroundClockSettings.getZoneClockFields().reverse();
  }

  private static getBaseFields(): number[] {
    return [...Array(FIELDS_COUNT).keys()];
  }

  private static getClockFields(): number[] {
    return [0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4, 19, 20];
  }

  private static getAnticlockFields(): number[] {
    return [4, 11, 8, 13, 10, 7, 15, 6, 18, 2, 16, 1, 14, 9, 5, 12, 3, 17, 0, 19, 20];
  }

  private static getTripleClockFields(): number[] {
    return [0, 12, 14, 2, 15, 13, 4, 17, 5, 1, 18, 7, 8, 19, 3, 9, 16, 6, 10, 11, 20];
  }

  private static getZoneClockFields(): number[] {
    return [0, 12, 17, 9, 3, 1, 5, 2, 14, 15, 16, 7, 18, 10, 6, 20, 13, 19, 8, 4, 11];
  }

  private static getRandom(size?: number): number[] {
    let fields = AroundClockSettings.getBaseFields();
    if (!size) {
      size = fields.length;
    }
    const randomFields = [];
    for (let i = (size - 1); i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      randomFields.push(fields[random]);
      fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
    }
    return randomFields;
  }

  private static getPirate(): number[] {
    let fields = AroundClockSettings.getRandom();
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * fields.length);
      if (fields[random] === 20) {
        i--;
      } else {
        fields[random] = 20;
      }
    }
    return fields;
  }

  private static getRecurrence(): number[] {
    let fields = AroundClockSettings.getBaseFields();
    const randomFields = [];
    for (let i = (fields.length - 1); i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      randomFields.push(fields[random]);
    }
    return randomFields;
  }
}
