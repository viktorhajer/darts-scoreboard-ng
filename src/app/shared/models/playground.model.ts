import {OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {GameService} from '../services/game.service';
import {Player} from './player.model';
import {Throw} from './throw.model';
import {ModalComponent} from '../components/modal.component';
import {Router} from '@angular/router';

export abstract class PlaygroundModel implements OnInit {

  throwEnabled: boolean = true;
  settingsOpen: boolean = true;
  gameHistory: GameService[];
  nextEnabled = true;
  zeroEnabled = true;
  multiEnabled = true;

  protected constructor(public game: GameService, public route: Router) {
  }

  ngOnInit() {
    this.settingsOpen = true;
    if (this.game.players.length == 0) {
      this.addPlayer();
    }
  }

  throwNumber(score: number) {
    if (this.throwEnabled) {
      this.save();
      this.throwEnabled = false;
      if (score == 25 && this.game.multiplier == 3) {
        this.game.multiplier = 1;
      }

      const actualPlayer = this.game.getActualPlayer();
      actualPlayer.addThrowHistory(new Throw(score, this.game.multiplier, this.game.actualThrow));
      if (this.game.actualThrow == 0) {
        actualPlayer.throws = [];
      }
      actualPlayer.throws[this.game.actualThrow] = score * this.game.multiplier;
      this.game.actualThrow++;

      this.calculatePoints(score)
        .then(() => this.checkPlayerState())
        .then(() => {
          this.game.multiplier = 1;
          this.game.players.forEach(player => {
            if (player.win) {

              const dialog = this.getDialog();
              if (this.canBeDraw() && this.game.isDraw()) {
                dialog.message = `End in a Draw`;
              } else {
                dialog.message = `${player.name} is the winner!`;
              }
              dialog.extraMessage = this.game.extraEndingMsg;
              dialog.players = this.game.clone().players;
              dialog.show();
              this.newGame(true);
            }
          });
          this.throwEnabled = true;
        });
    }
  }

  triplePoint() {
    this.game.multiplier = this.game.multiplier == 3 ? 1 : 3;
  }

  doublePoint() {
    this.game.multiplier = this.game.multiplier == 2 ? 1 : 2;
  }

  newGame(rotate: boolean = false) {
    this.settingsOpen = !this.validatePlayerSettings() || !this.validateSettings();
    this.reset();
    if (rotate) {
      this.game.rotatePlayers();
    }
  }

  private validatePlayerSettings(): boolean {
    const players: Player[] = [];
    this.game.players.forEach(player => {
      if (player.name.length != 0) {
        players.push(player);
      }
    });
    this.game.players = players;
    return players.length != 0;
  }

  addPlayer(): void {
    const player = new Player(uuid());
    player.name = 'Player ' + (this.game.players.length + 1);
    this.game.players.push(player);
  }

  removePlayer(player: Player): void {
    if (this.game.players.length > 1) {
      this.game.players = this.game.players.filter(p => p != player);
    }
  }

  reset(): void {
    this.gameHistory = [];
    this.game.resetScore();
    this.customReset();
  }

  busted(): void {
    const dialog = this.getDialog();
    dialog.message = `${this.game.getActualPlayer().name} busted!`;
    dialog.show();
  }

  getFieldValueAsNumber(field: string): number {
    return field == 'B' ? 25 : parseInt(field);
  }

  getFieldValueAsString(num: number): string {
    return num == 25 ? 'B' : num + '';
  }

  undo() {
    if (this.gameHistory.length > 0) {
      this.game = this.gameHistory.pop();
      this.undoState();
    }
  }

  skip() {
    if (!(this.game.isActualPlayerTheLast() && this.isLastRound())) {
      this.save();
      this.game.nextPlayer();
      this.customNext();
    }
  }

  quit() {
    this.route.navigate(['/menu']);
    this.game.resetScore();
  }

  private save() {
    this.gameHistory.push(this.game.clone());
    this.saveState();
  }

  abstract customReset(): void;

  abstract customNext(): void;

  abstract validateSettings(): boolean;

  abstract calculatePoints(score: number): Promise<any>;

  abstract checkPlayerState(): Promise<any>;

  abstract getDialog(): ModalComponent;

  abstract isFieldEnabledToThrow(field: number): boolean;

  abstract isHighlighted(field: number): boolean;

  abstract isSecondHighlighted(field: number): boolean;

  abstract saveState();

  abstract undoState();

  abstract isLastRound(): boolean;

  abstract canBeDraw(): boolean;
}
