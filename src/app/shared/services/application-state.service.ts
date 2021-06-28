import {Injectable} from '@angular/core';
import {ApplicationSettings} from '~models/application-settings.model';
import {SoundService} from '~services/sound.service';

const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';

@Injectable({providedIn: 'root'})
export class ApplicationStateService {

  settings = new ApplicationSettings();

  constructor(private soundService: SoundService) {
    const data = localStorage.getItem(APPLICATION_KEY);
    if (data) {
      this.settings = JSON.parse(data);
    }
    this.setTheme();
  }

  toggleDarkTheme() {
    this.soundService.fart();
    this.settings.darkTheme = (this.settings.darkTheme + 1) % 3;
    this.setTheme();
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
    document.body.className = document.body.className.replace('dark-theme', '');
    document.body.className = document.body.className.replace('dark-red', '');
    if (this.settings.darkTheme === 1) {
      document.body.classList.add('dark-theme');
    } else if (this.settings.darkTheme === 2) {
      document.body.classList.add('dark-red');
    }
  }

  private saveSettings() {
    localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
  }
}
