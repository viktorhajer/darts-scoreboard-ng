import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {CricketSettings} from './models/cricet.settings.model';
import {CricketState} from './models/cricet.state.model';

@Component({
  templateUrl: './cricket.component.html',
  animations: [slideInAnimation],
})
export class CricketComponent extends Playground<CricketState> {

  settings: CricketSettings;
  playerToDisplay: Player;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService);
    this.settings = new CricketSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    if (this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex)) {
      const playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
      if (!this.settings.isBlackOutGame() ||
        this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex ||
        this.isFieldDoneForPlayer(player, fieldIndex)) {

        if (this.isFieldClosedForOthers(player, fieldIndex) && (playerFieldCount + this.multiplier) > 3) {
          this.getPlayerState(player).setFieldCount(fieldIndex, 3);
        } else {
          let multiplier = this.multiplier;
          if (playerFieldCount < 3 && (playerFieldCount + this.multiplier) >= 3) {
            multiplier = (playerFieldCount + this.multiplier) % 3;
          }
          this.getPlayerState(player).setFieldCount(fieldIndex, playerFieldCount + this.multiplier);
          this.multiplier = multiplier;
        }
      }

      if (this.isFieldDoneForPlayer(player, fieldIndex)) {
        if (this.settings.isBlackOutGame()) {
          if (this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex) {
            this.getPlayerState(player).increaseActFieldIndex();
          }
        }
        this.punishPlayers(fieldIndex);
      }
    }
  }

  checkPlayerState(player: Player) {
    this.game.players.forEach(p => p.score = this.getPlayerTotal(p));
    const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    this.game.players.forEach(p => p.setWin(
      this.isPlayerDone(p) &&
      ((!punishStyle && this.game.isTheBestPlayer(p)) || (punishStyle && this.game.isTheWorstPlayer(p)))));
    if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  getFieldValue(player: Player, fieldIndex: number): string {
    const score = this.getPunishScore(player, fieldIndex);
    const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    const playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);

    let str = '';
    if (punishStyle && score !== 0) {
      str += score;
    }

    if (playerFieldCount === 0 && str.length === 0) {
      return '○';
    } else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
      return this.getFieldScore(player, fieldIndex) + '';
    } else if (playerFieldCount === 3 || ((punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3)) {
      str += '●●●';
    } else {
      for (let i = 0; i < playerFieldCount; i++) {
        str += '●';
      }
    }
    return str;
  }

  isActiveField(player: Player, fieldIndex: number): boolean {
    return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex;
  }

  isFieldDoneForPlayer(player: Player, fieldIndex: number): boolean {
    return this.getPlayerState(player).getFieldCount(fieldIndex) >= 3;
  }

  isFieldEnabled(fieldIndex: number): boolean {
    if (this.settings.isNoScoreGame()) {
      return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
    }
    return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex);
  }

  isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex) &&
      !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
  }

  isSecondaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex) &&
      this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
  }

  getFieldNote(fieldIndex: number): string {
    if (this.isPrimaryField(fieldIndex)) {
      const playerFieldCount = this.getPlayerState(this.getPlayerToDisplay()).getFieldCount(fieldIndex);
      const remaining = ''.padStart(3 - playerFieldCount, '●');
      return remaining + '\n' + this.game.players.filter(p => this.isFieldDoneForPlayer(p, fieldIndex))
        .map(p => p.name.substr(0, 1)).join(',').toUpperCase();
    } else if (this.isSecondaryField(fieldIndex)) {
      return this.game.players.filter(p => !this.isFieldDoneForPlayer(p, fieldIndex))
        .map(p => p.name.substr(0, 1)).join(',').toUpperCase();
    }
    return '';
  }

  customReset() {
    this.game.players.forEach(player => player.state = new CricketState());
  }

  customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  changePlayerToDisplay(player?: Player) {
    this.playerToDisplay = player;
    setTimeout(() => this.playerToDisplay = null, 1500);
  }

  private getPlayerToDisplay(): Player {
    return !!this.playerToDisplay ? this.playerToDisplay : this.game.getActualPlayer();
  }

  private getPlayerTotal(player: Player) {
    let total = 0;
    if (this.settings.isPunishGame() || this.settings.isBlackOutGame()) {
      total = this.getPlayerTotalForPunishGame(player);
    } else if (this.settings.isScoreGame()) {
      total = this.getPlayerTotalForScoreGame(player);
    }
    return total;
  }

  private getPlayerTotalForScoreGame(player: Player) {
    let total = 0;
    this.settings.fields.forEach(fieldIndex => {
      if (this.isFieldDoneForPlayer(player, fieldIndex)) {
        total += (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * Playground.getFieldValueFromIndex(fieldIndex);
      }
    }, this);
    return total;
  }

  private getPlayerTotalForPunishGame(player: Player) {
    let total = 0;
    this.settings.fields.forEach(fieldIndex => {
      total += this.getPlayerState(player).getPunishCount(fieldIndex) * Playground.getFieldValueFromIndex(fieldIndex);
    }, this);
    return total;
  }

  private punishPlayers(fieldIndex: number) {
    this.game.players.forEach(player => {
      if (!this.isFieldDoneForPlayer(player, fieldIndex)) {
        this.getPlayerState(player).setPunishCount(fieldIndex, this.getPlayerState(player).getPunishCount(fieldIndex) + this.multiplier);
      }
    }, this);
  }

  private getFieldScore(player: Player, fieldIndex: number): number {
    if (this.isFieldDoneForPlayer(player, fieldIndex)) {
      return (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * Playground.getFieldValueFromIndex(fieldIndex);
    }
    return 0;
  }

  private getPunishScore(player: Player, fieldIndex: number): number {
    return this.getPlayerState(player).getPunishCount(fieldIndex) * Playground.getFieldValueFromIndex(fieldIndex);
  }

  private isFieldClosed(fieldIndex: number): boolean {
    let closed = true;
    this.game.players.forEach(player => {
      closed = closed && this.isFieldDoneForPlayer(player, fieldIndex);
    }, this);
    return closed;
  }

  private isFieldClosedForOthers(player: Player, fieldIndex: number): boolean {
    let closed = true;
    this.game.players.forEach(p => {
      if (p.id !== player.id) {
        closed = closed && this.isFieldDoneForPlayer(p, fieldIndex);
      }
    }, this);
    return closed;
  }

  private isPlayerDone(player: Player): boolean {
    let done = true;
    this.settings.fields.forEach(fieldIndex => {
      done = done && this.isFieldDoneForPlayer(player, fieldIndex);
    });
    return done;
  }
}
