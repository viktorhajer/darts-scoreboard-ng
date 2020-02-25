import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';

@Injectable({providedIn: 'root'})
export class GameService {
  players: Player[] = [];
  actualPlayerIndex: number;
  actualThrow: number;
  round: number;
  victoryFirst = true;

  toggleVictoryFirst() {
    this.victoryFirst = !this.victoryFirst;
  }

  isTheLastThrow(): boolean {
    return this.actualThrow === 3;
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
    return player.id === this.getTheFirstPlayer().id;
  }

  isActualPlayerIsTheFirst(): boolean {
    return this.isTheFirstPlayer(this.getActualPlayer());
  }

  getTheLastPlayer(): Player {
    return this.players[this.getNumberOfPlayers() - 1];
  }

  isTheLastPlayer(player: Player): boolean {
    return player.id === this.getTheLastPlayer().id;
  }

  isActualPlayerTheLast(): boolean {
    return this.isTheLastPlayer(this.getActualPlayer());
  }

  isTheBestPlayer(actPlayer: Player): boolean {
    let max = this.players[0].score;
    this.players.forEach(player => {
      max = player.score > max ? player.score : max;
    });
    return actPlayer.score === max;
  }

  isTheWorstPlayer(actPlayer: Player): boolean {
    let min = this.players[0].score;
    this.players.forEach(player => {
      min = player.score < min ? player.score : min;
    });
    return actPlayer.score === min;
  }

  nextRound(): void {
    this.round++;
  }

  resetScore(): void {
    this.players.forEach(player => player.reset());
    this.actualPlayerIndex = 0;
    this.actualThrow = 0;
    this.round = 0;
  }

  rotatePlayers(): void {
    this.players.push(this.players.shift());
  }

  clone(): GameService {
    const game = new GameService();
    game.actualPlayerIndex = this.actualPlayerIndex;
    game.actualThrow = this.actualThrow;
    game.round = this.round;
    const players: Player[] = [];
    this.players.forEach(player => {
      players.push(player.clone());
    });
    game.players = players;
    return game;
  }

}
