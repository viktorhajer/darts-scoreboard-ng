import {OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {GameService} from '../services/game.service';
import {Player} from './player.model';
import {Throw} from './throw.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {ApplicationStateService} from '~services/application-state.service';

export const FIELDS_COUNT = 21;
const MAXIMUM_NUMBER_OF_PLAYERS = 6;

export abstract class Playground<T extends PlaygroundState> implements OnInit {

  throwEnabled = true;
  settingsOpen = true;
  gameHistory: GameService[];
  nextEnabled = true;
  zeroEnabled = true;
  multiEnabled = true;
  playground = this;
  multiplier: number;
  extraEndingMsg: string;

  protected constructor(public application: ApplicationStateService,
                        public game: GameService,
                        public route: Router,
                        public dialogService: DialogService,
                        public minimumNumberOfPlayers = 1) {
  }

  static getFieldValueFromIndex(fieldIndex: number): number {
    return fieldIndex === 20 ? 25 : fieldIndex + 1;
  }

  ngOnInit() {
    this.settingsOpen = true;
    this.extraEndingMsg = '';
  }

  throwNumber(score: number) {
    if (this.throwEnabled) {
      this.saveGameInHistory();
      this.throwEnabled = false;
      if (score === 25 && this.multiplier === 3) {
        this.multiplier = 1;
      }

      const actualPlayer = this.game.getActualPlayer();
      const fieldIndex = score === 25 ? 20 : score - 1;

      actualPlayer.addThrowHistory(new Throw(score, this.multiplier, this.game.actualThrow));
      if (this.game.actualThrow === 0) {
        actualPlayer.throws = [];
      }
      actualPlayer.throws[this.game.actualThrow] = score * this.multiplier;
      this.game.actualThrow++;

      this.calculatePoints(actualPlayer, fieldIndex, score);
      this.checkPlayerState(actualPlayer);

      this.multiplier = 1;
      const winners = this.game.players.filter(p => p.win);
      if (winners.length > 0) {
        if (this.game.victoryFirst || this.game.players.length - winners.length <= 1) {
          this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.getTheFinalResult());
          this.newGame(true);
        } else if (this.game.victoryFirst) {
          this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.getTheFinalResult());
          this.newGame(true);
        } else {
          while (this.game.getActualPlayer().win) {
            this.game.nextPlayer();
          }
        }
      }
      this.throwEnabled = true;
    }
  }

  getPlayerState(player: Player): T {
    return player.state as T;
  }

  canAddPlayer(): boolean {
    return this.game.players.length < MAXIMUM_NUMBER_OF_PLAYERS;
  }

  addPlayer(name: any) {
    if (!!name.value.trim().length && !this.game.players.some(p => p.name === name.value)) {
      this.game.players.push(new Player(uuid(), name.value));
      this.application.storePlayer(name.value);
    }
    name.value = '';
  }

  removePlayer(player: Player) {
    this.game.players = this.game.players.filter(p => p !== player);
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

  triplePoint() {
    this.multiplier = this.multiplier === 3 ? 1 : 3;
  }

  doublePoint() {
    this.multiplier = this.multiplier === 2 ? 1 : 2;
  }

  undo() {
    if (this.gameHistory.length > 0) {
      this.game = this.gameHistory.pop();
    }
  }

  skip() {
    const actThrow = this.game.actualThrow;
    this.throwNumber(0);
    if (actThrow !== 2) {
      this.skip();
    }
  }

  reset() {
    this.gameHistory = [];
    this.game.resetScore();
    this.multiplier = 1;
    this.extraEndingMsg = '';
    this.customReset();
  }

  quit() {
    this.reset();
    this.route.navigate(['/']);
  }

  customNext() {
    return;
  }

  customSettingsValidation(): boolean {
    return true;
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return true;
  }

  isPrimaryField(fieldIndex: number): boolean {
    return false;
  }

  isSecondaryField(fieldIndex: number): boolean {
    return false;
  }

  getFieldIcon(fieldIndex: number): string {
    return '';
  }

  getFieldNote(fieldIndex: number): string {
    return '';
  }

  getTheFinalResult(): Player[] {
    let winners = this.game.players.filter(p => p.win);
    if (!winners.length) {
      return [];
    }
    winners = winners.sort((p1, p2) => p1.winDateTime < p2.winDateTime ? -1 : 1)
      .slice(0, 1).map(p => p.clone());
    const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id))
      .map(p => {
        const c = p.clone();
        c.win = false;
        return c;
      });
    return [...winners, ...losers];
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

  private saveGameInHistory() {
    this.gameHistory.push(this.game.clone());
  }

  abstract customReset(): void;

  abstract calculatePoints(player: Player, fieldIndex: number, score: number);

  abstract checkPlayerState(player: Player);
}
