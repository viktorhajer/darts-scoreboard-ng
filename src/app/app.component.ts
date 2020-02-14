import {Component} from '@angular/core';
import {slideInAnimation} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor() {
    document.addEventListener('touchmove',  (event: any) => {
      if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
  }
}
