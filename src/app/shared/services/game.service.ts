import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';

@Injectable({providedIn: 'root'})
export class GameService {
  players: Player[] = [];
  actualPlayerIndex: number = 0;
  actualThrow: number = 0;
  actualFieldIndex = 0;
  round: number = 0;
  victoryFirst = true;
  numbs: number[] = [];

  toggleVictoryFirst() {
    this.victoryFirst = !this.victoryFirst;
  }

  isTheLastThrow(): boolean {
    return this.actualThrow === 3;
  }

  getActualPlayer(): Player {
    return this.players[this.actualPlayerIndex];
  }

  getActivePlayers(): Player[] {
    return this.players.filter(p => !p.isInactive());
  }

  getNextPlayer(): Player {
    let index = this.actualPlayerIndex + 1 === this.players.length ? 0 : this.actualPlayerIndex + 1;
    while (this.players[index].isInactive()) {
      index = index + 1 === this.players.length ? 0 : index + 1;
    }
    return this.players[index];
  }

  getPreviousPlayer(): Player {
    let index = this.actualPlayerIndex === 0 ? this.players.length - 1 : this.actualPlayerIndex - 1;
    while (this.players[index].isInactive()) {
      index = index === 0 ? this.players.length - 1 : index - 1;
    }
    return this.players[index];
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

  getTheBestPlayers(): Player[] {
    const activePlayers = this.getActivePlayers();
    const list = activePlayers.length ? activePlayers : this.players;
    let max = list[0].score;
    list.forEach(p => {
      max = p.score > max ? p.score : max;
    });
    return list.filter(p => p.score === max);
  }

  getTheWorstPlayers(): Player[] {
    const activePlayers = this.getActivePlayers();
    const list = activePlayers.length ? activePlayers : this.players;
    let min = list[0].score;
    list.forEach(p => {
      min = p.score < min ? p.score : min;
    });
    return list.filter(p => p.score === min);
  }

  isTheBestPlayer(actPlayer: Player): boolean {
    const best = this.getTheBestPlayers();
    return actPlayer.score === ((best && best.length) ? best[0].score : 0);
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
    //@ts-ignore
    this.players.push(this.players.shift());
  }

  clone(): GameService {
    const game = new GameService();
    game.actualPlayerIndex = this.actualPlayerIndex;
    game.actualThrow = this.actualThrow;
    game.actualFieldIndex = this.actualFieldIndex;
    game.round = this.round;
    game.numbs = this.numbs.map(n => n);
    const players: Player[] = [];
    this.players.forEach(player => {
      players.push(player.clone());
    });
    game.players = players;
    return game;
  }

}
