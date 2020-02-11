import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';

const MAXIMUM_NUMBER_OF_PLAYERS = 6;

@Injectable({providedIn: 'root'})
export class GameService {
  players: Player[] = [];
  actualPlayerIndex: number;
  actualThrow: number;
  multiplier: number;
  extraEndingMsg: string;
  round: number;

  canAddPlayer(): boolean {
    return this.players.length < MAXIMUM_NUMBER_OF_PLAYERS;
  }

  isTheFirstThrow(): boolean {
    return this.actualThrow == 1;
  }

  isTheLastThrow(): boolean {
    return this.actualThrow == 3;
  }

  getActualPlayer(): Player {
    return this.players[this.actualPlayerIndex];
  }

  nextPlayer(): void {
    if (this.isActualPlayerTheLast()) {
      this.nextRound();
    }
    this.actualPlayerIndex = (this.actualPlayerIndex + 1) % this.getNumberOfPlayers();
    this.actualThrow = 0;
  }

  getNumberOfPlayers(): number {
    return this.players.length;
  }

  getTheFirstPlayer(): Player {
    return this.players[0];
  }

  isTheFirstPlayer(player: Player): boolean {
    return player.id == this.getTheFirstPlayer().id;
  }

  isActualPlayerIsTheFirst(): boolean {
    return this.isTheFirstPlayer(this.getActualPlayer());
  }

  getTheLastPlayer(): Player {
    return this.players[this.getNumberOfPlayers() - 1];
  }

  isTheLastPlayer(player: Player): boolean {
    return player.id == this.getTheLastPlayer().id;
  }

  isActualPlayerTheLast(): boolean {
    return this.isTheLastPlayer(this.getActualPlayer());
  }

  isTheBestPlayer(actPlayer: Player): boolean {
    let bestPlayer = true;
    this.players.forEach(player => {
      bestPlayer = bestPlayer && actPlayer.score >= player.score;
    });
    return bestPlayer;
  }

  isTheWorstPlayer(actPlayer: Player): boolean {
    let lastPlayer = true;
    this.players.forEach(player => {
      lastPlayer = lastPlayer && actPlayer.score <= player.score;
    });
    return lastPlayer;
  }

  isDraw(): boolean {
    const winners = this.players.filter(player => player.win);
    if (winners.length > 0) {
      return this.players.filter(player => player.id != winners[0].id && player.score == winners[0].score).length > 0;
    }
    return false;
  }

  nextRound(): void {
    this.round++;
  }

  reset(): void {
    this.resetScore();
    this.players = [];
  }

  resetScore(): void {
    this.extraEndingMsg = '';
    this.players.forEach(player => player.reset());
    this.actualPlayerIndex = 0;
    this.actualThrow = 0;
    this.multiplier = 1;
    this.round = 0;
  }

  rotatePlayers(): void {
    this.players.push(this.players.shift());
  }

  clone(): GameService {
    const game = new GameService();
    game.actualPlayerIndex = this.actualPlayerIndex;
    game.actualThrow = this.actualThrow;
    game.multiplier = this.multiplier;
    game.extraEndingMsg = this.extraEndingMsg;
    game.round = this.round;
    let players: Player[] = [];
    this.players.forEach(player => {
      players.push(player.clone());
    });
    game.players = players;
    return game;
  }

}
