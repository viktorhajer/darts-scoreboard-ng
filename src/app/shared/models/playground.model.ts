import { OnInit, Directive } from '@angular/core';
import {v4 as uuid} from 'uuid';
import {Player} from './player.model';
import {Throw} from './throw.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {ApplicationStateService} from '~services/application-state.service';
import {GameService} from '~services/game.service';
import {SoundService} from '~services/sound.service';
import {STAT_NAME_SEPARATOR, StatisticsService} from '~services/statistics.service';
import {GameStatistics} from '~models/game-statistics.model';
import {PlayerStatistics} from '~models/player-statistics.model';
import {BotService, PLAYER_NAME} from '~services/bot.service';
import {BehaviorSubject} from 'rxjs';

export const FIELDS_COUNT = 21;
const MAXIMUM_NUMBER_OF_PLAYERS = 6;

@Directive()
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
  gameStatistics: GameStatistics;
  hasChanges = new BehaviorSubject<number>(Date.now());

  protected constructor(public gameTitle: string,
                        public application: ApplicationStateService,
                        public game: GameService,
                        public route: Router,
                        public dialogService: DialogService,
                        public soundService: SoundService,
                        public botService: BotService,
                        public statisticsService: StatisticsService,
                        public gameName: string,
                        public minimumNumberOfPlayers = 1,
                        public maximumNumberOfPlayers?: number) {
  }

  static getFieldValueFromIndex(fieldIndex: number): number {
    return fieldIndex === 20 ? 25 : fieldIndex + 1;
  }

  ngOnInit() {
    this.settingsOpen = true;
    this.extraEndingMsg = '';
  }

  throwNumber(args: number[]) {
    const score = args[0];
    const scoreReal = args[1];
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

      this.calculatePoints(actualPlayer, fieldIndex, score, scoreReal);
      this.checkPlayerState(actualPlayer);

      let gameEnded = false;
      this.multiplier = 1;
      const winners = this.game.players.filter(p => p.win);
      if (winners.length > 0) {
        if ((this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1) || !this.game.victoryFirst) {
          const content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
          this.finishStatistics();
          this.dialogService.openDialog('Game Over!', content, this.getTheFinalResult());
          this.newGame(true);
          gameEnded = true;
        } else {
          while (this.game.getActualPlayer().win) {
            this.game.nextPlayer();
          }
        }
      }

      const activePlayers = this.game.players.filter(p => !this.getPlayerState(p) || !this.getPlayerState(p).isInactive());
      if (!activePlayers.length) {
        const content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
        this.finishStatistics();
        this.dialogService.openDialog('Game Over!', content, this.getTheFinalResult());
        this.newGame(true);
        gameEnded = true;
      }

      this.throwEnabled = true;

      if (!gameEnded && this.game.getActualPlayer().name.toLowerCase().indexOf(PLAYER_NAME) !== -1) {
        this.botThrow();
      }
    }
  }

  getPlayerState(player: Player): T {
    return player.state as T;
  }

  canAddPlayer(): boolean {
    return this.game.getNumberOfPlayers() < MAXIMUM_NUMBER_OF_PLAYERS;
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
      let msg = 'Number of players are incorrect.';
      if (this.minimumNumberOfPlayers) {
        msg += ` (minimum: ${this.minimumNumberOfPlayers}`;
      }
      if (this.maximumNumberOfPlayers) {
        msg += (this.minimumNumberOfPlayers ? ', ' : ' (') + `maximum: ${this.maximumNumberOfPlayers}).`;
      } else {
        msg += this.minimumNumberOfPlayers ? ').' : '.';
      }
      this.dialogService.openErrorDialog('Error!', msg);
    } else if (this.settingsOpen) {
      this.dialogService.openErrorDialog('Error!', 'Settings is incorrect.');
    }
    if (rotate) {
      this.game.rotatePlayers();
    }
    this.reset();
    this.hasChanges.next(Date.now());
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
      this.hasChanges.next(Date.now());
    }
  }

  skip() {
    const actThrow = this.game.actualThrow;
    this.throwNumber([0, 0]);
    if (actThrow !== 2) {
      this.skip();
    }
  }

  reset() {
    this.gameHistory = [];
    this.game.resetScore();
    this.multiplier = 1;
    this.extraEndingMsg = '';
    this.game.actualFieldIndex = 0;
    this.customReset();
    this.startStatistics();
  }

  quit() {
    this.reset();
    this.route.navigate(['/']);
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

  isAlertField(fieldIndex: number): boolean {
    return false;
  }

  getFieldIcon(fieldIndex: number): string {
    return '';
  }

  getFieldNote(fieldIndex: number): string {
    return '';
  }

  decoratePlayerStat(player: Player): string {
    return player.name + STAT_NAME_SEPARATOR + player.score;
  }

  getGameConfig(): string {
    return '';
  }

  botThrow() {
  }

  getGameStatistics(): PlayerStatistics[] {
    const statistics = this.statisticsService.getGameStatistics(this.playground.gameName);
    const players: PlayerStatistics[] = [];
    statistics.forEach(stat => {
      this.parseStatistics(stat, 'l', players);
      this.parseStatistics(stat, 'w', players);
    });
    return players;
  }

  getGameHistory(): GameStatistics[] {
    return this.statisticsService.getGameStatistics(this.playground.gameName);
  }

  getTheFinalResult(): Player[] {
    let winners = this.game.players.filter(p => p.win);
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

  private startStatistics() {
    this.gameStatistics = new GameStatistics();
    this.gameStatistics.s = new Date().toISOString();
    this.gameStatistics.g = this.gameName;
  }

  private finishStatistics() {
    this.gameStatistics.f = new Date().toISOString();
    this.gameStatistics.w = this.game.players.filter(p => p.win).map(p => this.decoratePlayerStat(p));
    this.gameStatistics.l = this.game.players.filter(p => !p.win).map(p => this.decoratePlayerStat(p));
    this.gameStatistics.r = this.game.round;
    this.gameStatistics.c = this.getGameConfig();
    this.statisticsService.saveStatistics(this.gameStatistics);
  }

  private parseStatistics(stat: GameStatistics, field: 'w' | 'l', players: PlayerStatistics[]) {
    stat[field].forEach(p => {
      const name = p.split(STAT_NAME_SEPARATOR)[0];
      let player = players.find(pl => pl.n === name);
      if (!player) {
        player = {n: name, w: 0, l: 0};
        players.push(player);
      }
      player[field]++;
    });
  }

  private playerSettingsValidation(): boolean {
    const players: Player[] = [];
    this.game.players.forEach(player => {
      if (player.name.length !== 0) {
        players.push(player);
      }
    });
    this.game.players = players;
    return players.length >= this.minimumNumberOfPlayers &&
      (!this.maximumNumberOfPlayers || players.length <= this.maximumNumberOfPlayers);
  }

  private saveGameInHistory() {
    this.gameHistory.push(this.game.clone());
  }

  abstract customReset(): void;

  abstract calculatePoints(player: Player, fieldIndex: number, score: number, scoreReal?: number);

  abstract checkPlayerState(player: Player);
}
