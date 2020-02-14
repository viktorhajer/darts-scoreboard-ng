import {Component} from '@angular/core';
import {CricketState} from './models/state.model';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';

@Component({
  templateUrl: './cricket.component.html'
})
export class CricketComponent extends PlaygroundModel<CricketState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new CricketState(player)));
  }

  customSettingsValidation(): boolean {
    return this.settings.fields.length > 0;
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    this.updateField(player, score);
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();

    this.game.players.forEach(p => {
      p.score = this.getPlayerTotal(p);
    }, this);

    const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    player.win = this.isPlayerDone(player)
      && ((!punishStyle && this.game.isTheBestPlayer(player)) || (punishStyle && this.game.isTheWorstPlayer(player)));

    if (this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  getFieldValue(player: Player, field: string): string {
    const score = this.getPunishScore(player, field);
    const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    const playerFieldCount = this.getPlayerState(player).getFieldCount(field);

    let str = '';
    if (punishStyle && score !== 0) {
      str += score;
    }

    if (playerFieldCount === 0 && str.length === 0) {
      return '○';
    } else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
      return this.getFieldScore(player, field) + '';
    } else if (playerFieldCount === 3 || ((punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3)) {
      str += '●●●';
    } else {
      for (let i = 0; i < playerFieldCount; i++) {
        str += '●';
      }
    }
    return str;
  }

  isFieldDoneForPlayer(player: Player, field: string): boolean {
    return this.getPlayerState(player).getFieldCount(field) >= 3;
  }

  isActiveField(player: Player, field: string): boolean {
    return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field;
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field) &&
      !this.isFieldDoneForPlayer(this.game.getActualPlayer(), field === 25 ? 'B' : field + '');
  }

  isSecondHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field) &&
      this.isFieldDoneForPlayer(this.game.getActualPlayer(), field === 25 ? 'B' : field + '');
  }

  getFieldNote(field: number): string {
    if (this.isHighlighted(field)) {
      const playerFieldCount = this.getPlayerState(this.game.getActualPlayer()).getFieldCount(field === 25 ? 'B' : field + '');
      return ''.padStart(3 - playerFieldCount, '●');
    }
    return '';
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr = field + '';
    if (field === 25) {
      fieldStr = 'B';
    }
    return this.settings.fields.indexOf(fieldStr) !== -1 && !this.isFieldClosed(fieldStr);
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
    this.settings.fields.forEach(field => {
      if (this.isFieldDoneForPlayer(player, field)) {
        total += (this.getPlayerState(player).getFieldCount(field) - 3) * PlaygroundModel.getFieldValueAsNumber(field);
      }
    }, this);
    return total;
  }

  private getPlayerTotalForPunishGame(player: Player) {
    let total = 0;
    this.settings.fields.forEach(field => {
      total += this.getPlayerState(player).getPunishCount(field) * PlaygroundModel.getFieldValueAsNumber(field);
    }, this);
    return total;
  }

  private updateField(player: Player, score: number) {
    const field = score === 25 ? 'B' : (score + '');

    if (this.settings.fields.indexOf(field) !== -1 && !this.isFieldClosed(field)) {
      const playerFieldCount = this.getPlayerState(player).getFieldCount(field);
      if (!this.settings.isBlackOutGame() ||
        this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field ||
        this.isFieldDoneForPlayer(player, field)) {

        if (this.isFieldClosedForOthers(player, field) && (playerFieldCount + this.game.multiplier) > 3) {
          this.getPlayerState(player).setFieldCount(field, 3);
        } else {
          let multiplier = this.game.multiplier + 0;
          if (playerFieldCount < 3 && (playerFieldCount + this.game.multiplier) >= 3) {
            multiplier = (playerFieldCount + this.game.multiplier) % 3;
          }
          this.getPlayerState(player).setFieldCount(field, playerFieldCount + this.game.multiplier);
          this.game.multiplier = multiplier;
        }
      }

      if (this.isFieldDoneForPlayer(player, field)) {
        if (this.settings.isBlackOutGame()) {
          if (this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field) {
            this.getPlayerState(player).increaseActFieldIndex();
          }
        }
        this.punishPlayers(field);
      }
    }
  }

  private punishPlayers(field: string) {
    this.game.players.forEach(player => {
      if (!this.isFieldDoneForPlayer(player, field)) {
        this.getPlayerState(player).setPunishCount(field, this.getPlayerState(player).getPunishCount(field) + this.game.multiplier);
      }
    }, this);
  }

  private getFieldScore(player: Player, field: string): number {
    if (this.isFieldDoneForPlayer(player, field)) {
      return (this.getPlayerState(player).getFieldCount(field) - 3) * PlaygroundModel.getFieldValueAsNumber(field);
    }
    return 0;
  }

  private getPunishScore(player: Player, field: string): number {
    return this.getPlayerState(player).getPunishCount(field) * PlaygroundModel.getFieldValueAsNumber(field);
  }

  private isFieldClosed(field: string) {
    let closed = true;
    this.game.players.forEach(player => {
      closed = closed && this.isFieldDoneForPlayer(player, field);
    }, this);
    return closed;
  }

  private isFieldClosedForOthers(player: Player, field: string) {
    let closed = true;
    this.game.players.forEach(p => {
      if (p.id !== player.id) {
        closed = closed && this.isFieldDoneForPlayer(p, field);
      }
    }, this);
    return closed;
  }

  private isPlayerDone(player: Player): boolean {
    let done = true;
    this.settings.fields.forEach(field => {
      done = done && this.isFieldDoneForPlayer(player, field);
    });
    return done;
  }

  private getPlayerState(player: Player): CricketState {
    return this.state.filter(s => s.player.id === player.id)[0];
  }
}
