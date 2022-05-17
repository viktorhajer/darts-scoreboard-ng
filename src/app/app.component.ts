import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {slideInAnimation} from './route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {SoundService} from '~services/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('audioElement') audioElementRef: ElementRef;

  constructor(public application: ApplicationStateService,
              private soundService: SoundService) {
    // document.addEventListener('touchmove',  (event: any) => {
    //   if (event.scale !== 1) { event.preventDefault(); }
    // }, { passive: false });
  }

  ngAfterViewInit() {
    this.soundService.audioElement = this.audioElementRef.nativeElement;
  }
}
