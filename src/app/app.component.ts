import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  constructor() {
    document.addEventListener('touchmove',  (event: any) => {
      if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
  }
}
