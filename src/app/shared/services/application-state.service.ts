import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class ApplicationStateService {

  toggleColorMode() {
    if (document.body.classList.contains('alternative-theme')) {
      document.body.className = document.body.className.replace('alternative-theme', '');
    } else {
      document.body.classList.add('alternative-theme');
    }
  }

}
