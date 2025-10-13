import {Injectable} from '@angular/core';
import {ApplicationSettings} from '../models/application-settings.model';
import {theme} from '../../theme.constant';
import {Theme} from '../models/theme.model';

const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';

@Injectable({providedIn: 'root'})
export class ApplicationStateService {

  private availableThemes: Theme[] = [theme];
  settings = new ApplicationSettings();
  isMobile = false;

  constructor() {
    this.isMobile = window.innerWidth < 450;
    const data = localStorage.getItem(APPLICATION_KEY);
    if (data) {
      this.settings = JSON.parse(data);
    }
    this.settings.details = this.isMobile ? 1 : 0;
    // this.setTheme();
  }

  toggleColorTheme() {
    this.settings.theme = (this.settings.theme + 1) % this.availableThemes.length;
    this.setTheme();
    this.saveSettings();
  }

  toggleDetails() {
    this.settings.details = (this.settings.details + 1) % 2;
    this.saveSettings();
  }

  getStoredPlayers(): string[] {
    const data = localStorage.getItem(PLAYER_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  storePlayer(name: string) {
    const players = [name, ...this.getStoredPlayers()].filter((v, i, a) => a.indexOf(v) === i);
    localStorage.setItem(PLAYER_KEY, JSON.stringify(players));
  }

  private setTheme() {
    if (this.settings.theme >= this.availableThemes.length) {
      this.settings.theme = 0;
    }
    Object.keys(this.availableThemes[this.settings.theme].properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.availableThemes[this.settings.theme].properties[property]
      );
    });
  }

  private saveSettings() {
    localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
  }
}
