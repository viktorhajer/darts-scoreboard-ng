import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SoundService {

  audioElement: HTMLAudioElement;

  no() {
    // this.play('oh_no.mp3');
  }

  private play(soundFileName: string) {
    this.audioElement.src = `assets/sounds/${soundFileName}`;
    this.audioElement.play();
  }
}
