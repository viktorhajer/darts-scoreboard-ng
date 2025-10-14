import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {slideInAnimation} from './route-animation';
import {ApplicationStateService} from './shared/services/application-state.service';
import {SoundService} from './shared/services/sound.service';
import {VoiceControlService} from './shared/services/voice-control.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  //@ts-ignore
  @ViewChild('audioElement') audioElementRef: ElementRef;
  listening = false;

  constructor(public application: ApplicationStateService,
              public voiceControl: VoiceControlService,
              private soundService: SoundService) {
    // document.addEventListener('touchmove',  (event: any) => {
    //   if (event.scale !== 1) { event.preventDefault(); }
    // }, { passive: false });
  }

  ngAfterViewInit() {
    this.soundService.audioElement = this.audioElementRef.nativeElement;
  }
}
