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
                        public dialogService: DialogService,
                        public minimumNumberOfPlayers = 1) {
  }

  static getFieldValueAsNumber(field: string): number {
    return field === 'B' ? 25 : parseInt(field, 10);
  }

  ngOnInit() {
    this.settingsOpen = true;
    for (let i = 0; i < this.minimumNumberOfPlayers - this.game.players.length; i++) {
      this.addPlayer();
    }
  }

  throwNumber(score: number): Promise<void> {
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

      return this.calculatePoints(score)
        .then(() => this.checkPlayerState())
        .then(() => {
          this.game.multiplier = 1;
          this.game.players.forEach(player => {
            if (player.win) {
              this.dialogService.openDialog((this.canBeDraw() && this.game.isDraw()) ? 'End in a Draw' : `${player.name} is the winner!`,
                this.game.extraEndingMsg, this.game.clone().players);
              this.newGame(true);
              return;
            }
          });
          this.throwEnabled = true;
        });
    }
  }

  newGame(rotate = false) {
    this.settingsOpen = !this.playerSettingsValidation() || !this.customSettingsValidation();
    if (!this.playerSettingsValidation()) {
      this.dialogService.openDialog('Error!', 'Number of players are incorrect.');
    } else if (this.settingsOpen) {
      this.dialogService.openDialog('Error!', 'Settings is incorrect.');
    }
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

  triplePoint() {
    this.game.multiplier = this.game.multiplier === 3 ? 1 : 3;
  }

  doublePoint() {
    this.game.multiplier = this.game.multiplier === 2 ? 1 : 2;
  }

  reset(): void {
    this.gameHistory = [];
    this.game.resetScore();
    this.stateHistory = [];
    this.customReset();
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
    const actThrow = this.game.actualThrow;
    this.throwNumber(0).then(() => {
      if (actThrow !== 2) {
        this.skip();
      }
    });
  }

  quit() {
    this.route.navigate(['/menu']);
    this.game.resetScore();
  }

  customNext() {
    // should be implemented
  }

  customSettingsValidation(): boolean {
    return true;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  getFieldIcon(field: number): string {
    return '';
  }

  isLastRound(): boolean {
    return false;
  }

  isFieldEnabledToThrow(field: number): boolean {
    return true;
  }

  canBeDraw(): boolean {
    return false;
  }

  private playerSettingsValidation(): boolean {
    const players: Player[] = [];
    this.game.players.forEach(player => {
      if (player.name.length !== 0) {
        players.push(player);
      }
    });
    this.game.players = players;
    return players.length >= this.minimumNumberOfPlayers;
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

  abstract calculatePoints(score: number): Promise<any>;

  abstract checkPlayerState(): Promise<any>;
}
