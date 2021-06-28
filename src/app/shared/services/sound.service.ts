import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SoundService {

  audioElement: HTMLAudioElement;

  fart() {
    this.play('perfect-fart.mp3');
  }

  private play(soundFileName: string) {
    this.audioElement.src = `assets/sounds/${soundFileName}`;
    this.audioElement.play();
  }
}
