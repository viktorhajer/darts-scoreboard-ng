import {OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {GameService} from '../services/game.service';
import {Player} from './player.model';
import {Throw} from './throw.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';

export const FIELDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 'B'];
export const FIELDS_COUNT = 21;
const MAXIMUM_NUMBER_OF_PLAYERS = 6;

export abstract class PlaygroundModel<T extends PlaygroundState> implements OnInit {

  throwEnabled = true;
  settingsOpen = true;
  gameHistory: GameService[];
  nextEnabled = true;
  zeroEnabled = true;
  multiEnabled = true;
  playground = this;
  multiplier: number;
  extraEndingMsg: string;

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
    this.extraEndingMsg = '';
  }

  throwNumber(score: number): Promise<void> {
    if (this.throwEnabled) {
      this.save();
      this.throwEnabled = false;
      if (score === 25 && this.multiplier === 3) {
        this.multiplier = 1;
      }

      const actualPlayer = this.game.getActualPlayer();
      actualPlayer.addThrowHistory(new Throw(score, this.multiplier, this.game.actualThrow));
      if (this.game.actualThrow === 0) {
        actualPlayer.throws = [];
      }
      actualPlayer.throws[this.game.actualThrow] = score * this.multiplier;
      this.game.actualThrow++;

      return this.calculatePoints(score)
        .then(() => this.checkPlayerState())
        .then(() => {
          this.multiplier = 1;

          const winners = this.game.players.filter(p => p.win);
          if (winners.length > 0) {
            if (this.game.victoryFirst || this.game.players.length - winners.length <= 1) {
              this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.game.clone().players);
              this.newGame(true);
            } else if (this.game.victoryFirst) {
              this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.game.clone().players);
              this.newGame(true);
            } else {
              while (this.game.getActualPlayer().win) {
                this.game.nextPlayer();
              }
            }
          }
          this.throwEnabled = true;
        });
    }
  }

  newGame(rotate = false) {
    this.settingsOpen = !this.playerSettingsValidation() || !this.customSettingsValidation();
    if (!this.playerSettingsValidation()) {
      this.dialogService.openErrorDialog('Error!', 'Number of players are incorrect.');
    } else if (this.settingsOpen) {
      this.dialogService.openErrorDialog('Error!', 'Settings is incorrect.');
    }
    this.reset();
    if (rotate) {
      this.game.rotatePlayers();
    }
  }

  canAddPlayer(): boolean {
    return this.game.players.length < MAXIMUM_NUMBER_OF_PLAYERS;
  }

  addPlayer(name: any) {
    if (!!name.value.trim().length && !this.game.players.some(p => p.name === name.value)) {
      this.game.players.push(new Player(uuid(), name.value));
    }
    name.value = '';
  }

  removePlayer(player: Player) {
    this.game.players = this.game.players.filter(p => p !== player);
  }

  triplePoint() {
    this.multiplier = this.multiplier === 3 ? 1 : 3;
  }

  doublePoint() {
    this.multiplier = this.multiplier === 2 ? 1 : 2;
  }

  reset() {
    this.gameHistory = [];
    this.game.resetScore();
    this.multiplier = 1;
    this.extraEndingMsg = '';
    this.customReset();
  }

  undo() {
    if (this.gameHistory.length > 0) {
      this.game = this.gameHistory.pop();
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
    this.route.navigate(['/']);
    this.game.resetScore();
    this.multiplier = 1;
    this.extraEndingMsg = '';
  }

  customNext() {
    // should be implemented
  }

  customSettingsValidation(): boolean {
    return true;
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  getFieldIcon(field: number): string {
    return '';
  }

  getFieldNote(field: number): string {
    return '';
  }

  isLastRound(): boolean {
    return false;
  }

  isFieldEnabledToThrow(field: number): boolean {
    return true;
  }

  getPlayerState(player: Player): T {
    return <T>player.state;
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
  }

  abstract customReset(): void;

  abstract calculatePoints(score: number): Promise<any>;

  abstract checkPlayerState(): Promise<any>;
}
