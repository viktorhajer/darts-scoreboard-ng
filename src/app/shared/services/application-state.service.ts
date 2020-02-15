import {Injectable} from '@angular/core';
import {ApplicationSettings} from '~models/application-settings.model';

const APPLICATION_KEY = 'ApplicationSettings';

@Injectable({providedIn: 'root'})
export class ApplicationStateService {

  settings = new ApplicationSettings();

  constructor() {
    const data = localStorage.getItem(APPLICATION_KEY);
    if (data) {
      this.settings = JSON.parse(data);
    }
    this.setTheme();
  }

  toggleDarkTheme() {
    this.settings.darkTheme = !this.settings.darkTheme;
    this.setTheme();
    this.saveSettings();
  }

  private setTheme() {
    if (this.settings.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.className = document.body.className.replace('dark-theme', '');
    }
  }

  private saveSettings() {
    localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
  }

}
