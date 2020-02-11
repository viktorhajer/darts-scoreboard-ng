import {OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {GameService} from '../services/game.service';
import {Player} from './player.model';
import {Throw} from './throw.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';

export abstract class PlaygroundModel<T extends PlaygroundState> implements OnInit {

  throwEnabled = true;
  settingsOpen = true;
  gameHistory: GameService[];
  nextEnabled = true;
  zeroEnabled = true;
  multiEnabled = true;
  state: T[];
  stateHistory: T[][] = [];
  playground = this;

  protected constructor(public game: GameService,
                        public route: Router,
                        public dialogService: DialogService) {
  }

  ngOnInit() {
    this.settingsOpen = true;
    if (this.game.players.length === 0) {
      this.addPlayer();
    }
  }

  throwNumber(score: number) {
    if (this.throwEnabled) {
      this.save();
      this.throwEnabled = false;
      if (score === 25 && this.game.multiplier === 3) {
        this.game.multiplier = 1;
      }

      const actualPlayer = this.game.getActualPlayer();
      actualPlayer.addThrowHistory(new Throw(score, this.game.multiplier, this.game.actualThrow));
      if (this.game.actualThrow === 0) {
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
              this.dialogService.openDialog(this.game.extraEndingMsg,
                (this.canBeDraw() && this.game.isDraw()) ? 'End in a Draw' : `${player.name} is the winner!`,
                this.game.clone().players);
              this.newGame(true);
            }
          });
          this.throwEnabled = true;
        });
    }
  }

  triplePoint() {
    this.game.multiplier = this.game.multiplier === 3 ? 1 : 3;
  }

  doublePoint() {
    this.game.multiplier = this.game.multiplier === 2 ? 1 : 2;
  }

  newGame(rotate = false) {
    this.settingsOpen = !this.validatePlayerSettings() || !this.validateSettings();
    this.reset();
    if (rotate) {
      this.game.rotatePlayers();
    }
  }

  addPlayer(): void {
    const player = new Player(uuid());
    player.name = 'Player ' + (this.game.players.length + 1);
    this.game.players.push(player);
  }

  removePlayer(player: Player): void {
    if (this.game.players.length > 1) {
      this.game.players = this.game.players.filter(p => p !== player);
    }
  }

  reset(): void {
    this.gameHistory = [];
    this.game.resetScore();
    this.stateHistory = [];
    this.customReset();
  }

  busted(): void {
    this.dialogService.openDialog('Game Over', `${this.game.getActualPlayer().name} busted!`);
  }

  getFieldValueAsNumber(field: string): number {
    return field === 'B' ? 25 : parseInt(field, 10);
  }

  undo() {
    if (this.gameHistory.length > 0) {
      this.game = this.gameHistory.pop();
      if (this.stateHistory.length > 0) {
        this.state = this.stateHistory.pop();
      }
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

  customNext() {
    // should be implemented
  }

  private validatePlayerSettings(): boolean {
    const players: Player[] = [];
    this.game.players.forEach(player => {
      if (player.name.length !== 0) {
        players.push(player);
      }
    });
    this.game.players = players;
    return players.length !== 0;
  }

  private save() {
    this.gameHistory.push(this.game.clone());
    if (this.state) {
      const state = [];
      this.state.forEach(s => state.push(s.clone()));
      this.stateHistory.push(state);
    }
  }

  abstract customReset(): void;

  abstract validateSettings(): boolean;

  abstract calculatePoints(score: number): Promise<any>;

  abstract checkPlayerState(): Promise<any>;

  abstract isFieldEnabledToThrow(field: number): boolean;

  abstract isHighlighted(field: number): boolean;

  abstract isSecondHighlighted(field: number): boolean;

  abstract isLastRound(): boolean;

  abstract canBeDraw(): boolean;

}
