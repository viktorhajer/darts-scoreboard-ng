import {Component, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {ModalComponent} from '../components/modal.component';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  templateUrl: './x01.playground.html'
})
export class X01Playground extends PlaygroundModel {

  @ViewChild(ModalComponent) dialog: ModalComponent;
  settings: Settings;

  constructor(game: GameService) {
    super(game);
    this.settings = new Settings();
  }

  customReset(): void {
    this.game.players.forEach(player => player.score = this.settings.startValue);
  }

  customNext() {
  }

  validateSettings(): boolean {
    return true;
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const actualScore = score * this.game.multiplier;

    const validStart: boolean = !player.first || this.settings.isNormalStart()
      || (player.first
        && ((this.settings.isDoubleStart() && this.game.multiplier == 2)
          || (this.settings.isTripleStart() && this.game.multiplier == 3)));

    if (validStart) {
      player.first = false;
      return this.countDown(player, actualScore);
    } else {
      return Promise.resolve();
    }
  }

  countDown(player: Player, score: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      var id = setInterval(() => {
        if (score == 0) {
          clearInterval(id);
          resolve();
        } else if (player.score < 0) {
          player.score -= score;
          score = 0;
        } else {
          player.score--;
          score--;
        }
      }, 5);
    });
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    let next: boolean = false;

    if ((this.settings.isHighScoreGame() && player.score <= 0) ||
      ((player.score == 0 && (this.settings.isNormalCheckout()
        || (this.settings.isDoubleCheckout() && this.game.multiplier == 2)
        || (this.settings.isTripleCheckout() && this.game.multiplier == 3))))) {
      player.win = true;
      next = true;
    } else if (player.score <= 0
      || (this.settings.isDoubleCheckout() && player.score < 2)
      || (this.settings.isTripleCheckout() && player.score < 3)) {
      for (let i = 0; i < player.throws.length; i++) {
        player.score += player.throws[i];
      }
      next = true;
      this.busted();
    }

    if (this.game.actualThrow == 3 || next) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  getDialog(): ModalComponent {
    return this.dialog;
  }

  isFieldEnabledToThrow(field: number): boolean {
    return true;
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  saveState() {
  }

  undoState() {
  }

  isLastRound(): boolean {
    return false;
  }

  canBeDraw(): boolean {
    return false;
  }

}

export class Settings {

  startValue: number = 301;
  start: number = 1;
  checkout: number = 1;

  isNormalStart(): boolean {
    return this.start == 1;
  }

  isDoubleStart(): boolean {
    return this.start == 2;
  }

  isTripleStart(): boolean {
    return this.start == 3;
  }

  isNormalCheckout(): boolean {
    return this.checkout == 1;
  }

  isDoubleCheckout(): boolean {
    return this.checkout == 2;
  }

  isTripleCheckout(): boolean {
    return this.checkout == 3;
  }

  isHighScoreGame(): boolean {
    return this.checkout == 4;
  }

  setStart(start: number) {
    this.start = start;
  }

  setCheckout(checkout: number) {
    this.checkout = checkout;
  }

  setStartValue(startValue: number) {
    this.startValue = startValue;
  }
}


