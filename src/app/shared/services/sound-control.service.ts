import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

const KEYWORD_START = 'start';
const KEYWORD_STOP = 'stop';
export const KEYWORD_DUPLA = 'dupla';
export const KEYWORD_TRIPLA = 'tripla';
export const KEYWORD_NEXT = 'next';

@Injectable({providedIn: 'root'})
export class SoundControlService {

  active = false;
  listening = false;
  recognition: any;

  throwNumber = new BehaviorSubject<{ num: number, extras: string }>({num: -1, extras: ''});

  constructor(private readonly zone: NgZone) {
    //@ts-ignore
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    this.recognition.lang = 'hu-HU'; // magyar nyelv
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.onerror = (err: any) => {
      console.error('Speech recognition error:', err);
      this.endSpeech();
    };
    this.recognition.onresult = (event: any) => this.result(event);
    this.recognition.onend = () => this.endSpeech();
  }

  toggleActivation() {
    this.active = !this.active;
    this.listening = false;
    if (this.active) {
      this.recognition.start();
    } else {
      this.recognition.stop();
    }
  }

  private result(event: any) {
    const sentence = event.results[0][0].transcript.toLowerCase();
    console.log('Recognized word:', sentence);
    this.zone.run(() => {
      sentence.split(' ').forEach((word: string) => {
        if (this.hasWord(word, KEYWORD_START)) {
          this.listening = true;
        } else if (this.hasWord(word, KEYWORD_STOP)) {
          this.listening = false;
        } else if (this.listening) {
          if (this.hasWord(word, KEYWORD_NEXT)) {
            this.throwNumber.next({num: -1, extras: KEYWORD_NEXT});
          } else if (this.hasWord(word, KEYWORD_DUPLA)) {
            this.throwNumber.next({num: -1, extras: KEYWORD_DUPLA});
          } else if (this.hasWord(word, KEYWORD_TRIPLA)) {
            this.throwNumber.next({num: -1, extras: KEYWORD_TRIPLA});
          } else {
            const num = this.normalize(this.wordToNumber(word));
            if (num !== -1) {
              this.throwNumber.next({num, extras: ''});
            }
          }
        }
      });
    });
  }

  private endSpeech() {
    if (this.active) {
      this.recognition.start();
    }
  }

  private hasWord(sentence: string, keyword: string): boolean {
    const words = sentence.split(' ');
    return words.includes(keyword.toLowerCase());
  }

  private wordToNumber(word: string): number {
    const numbers: { [key: string]: number } = {
      'nulla': 0, 'bull': 25,
      'egy': 1, 'kettő': 2, 'három': 3, 'négy': 4, 'öt': 5, 'hat': 6, 'hét': 7, 'nyolc': 8, 'kilenc': 9, 'tíz': 10,
      'tizenegy': 11, 'tizenkettő': 12, 'tizenhárom': 13, 'tizennégy': 14, 'tizenöt': 15, 'tizenhat': 16,
      'tizenhét': 17, 'tizennyolc': 18, 'tizenkilenc': 19, 'húsz': 20,
    };
    if (numbers[word] !== undefined) {
      return numbers[word];
    }
    if (!isNaN(Number(word))) {
      return Number(word);
    }
    return -1;
  }

  private normalize(num: number): number {
    if (num === 25) {
      return 25;
    }
    if (num < 0 || num > 20) {
      return -1;
    }
    return num;
  }
}
