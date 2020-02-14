import {Component} from '@angular/core';
import {slideInAnimation} from './route-animation';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  constructor(public applicationStateService: ApplicationStateService) {
    document.addEventListener('touchmove',  (event: any) => {
      if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
  }
}
