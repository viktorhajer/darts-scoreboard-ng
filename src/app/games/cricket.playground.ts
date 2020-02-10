import {Component, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {PlaygroundState} from '../models/playground-state.model';
import {ModalComponent} from '../components/modal.component';
import {FieldValue} from '../models/field-value.model';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  templateUrl: './cricket.playground.html'
})
export class CricketPlayground extends PlaygroundModel {

  @ViewChild(ModalComponent) dialog: ModalComponent;
  settings: Settings;
  state: CricketState[];
  stateHistory: CricketState[][];

  constructor(game: GameService) {
    super(game);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new CricketState(player)), this);
    this.stateHistory = [];
  }

  customNext() {
  }

  validateSettings(): boolean {
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

    let punishStyle: boolean = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    player.win = this.isPlayerDone(player)
      && ((!punishStyle && this.game.isTheBestPlayer(player)) || (punishStyle && this.game.isTheWorstPlayer(player)));

    if (this.game.actualThrow == 3) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  getDialog(): ModalComponent {
    return this.dialog;
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
        total += (this.getPlayerState(player).getFieldCount(field) - 3) * this.getFieldValueAsNumber(field);
      }
    }, this);
    return total;
  }

  private getPlayerTotalForPunishGame(player: Player) {
    let total = 0;
    this.settings.fields.forEach(field => {
      total += this.getPlayerState(player).getPunishCount(field) * this.getFieldValueAsNumber(field);
    }, this);
    return total;
  }

  private updateField(player: Player, score: number) {
    const field: string = score == 25 ? 'B' : (score + '');

    if (this.settings.fields.indexOf(field) != -1 && !this.isFieldClosed(field)) {
      let playerFieldCount = this.getPlayerState(player).getFieldCount(field);
      if (!this.settings.isBlackOutGame() || this.settings.fields[this.getPlayerState(player).getActFieldIndex()] == field || this.isFieldDoneForPlayer(player, field)) {

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
          if (this.settings.fields[this.getPlayerState(player).getActFieldIndex()] == field) {
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
      return (this.getPlayerState(player).getFieldCount(field) - 3) * this.getFieldValueAsNumber(field);
    }
    return 0;
  }

  private getPunishScore(player: Player, field: string): number {
    return this.getPlayerState(player).getPunishCount(field) * this.getFieldValueAsNumber(field);
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
      if (p.id != player.id) {
        closed = closed && this.isFieldDoneForPlayer(p, field);
      }
    }, this);
    return closed;
  }

  getFieldValue(player: Player, field: string): string {
    const score = this.getPunishScore(player, field);
    const punishStyle: boolean = this.settings.isPunishGame() || this.settings.isBlackOutGame();
    const playerFieldCount = this.getPlayerState(player).getFieldCount(field);

    let str = '';
    if (punishStyle && score != 0) {
      str += score;
    }

    if (playerFieldCount == 0 && str.length == 0) {
      return '○';
    } else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
      return this.getFieldScore(player, field) + '';
    } else if (playerFieldCount == 3 || ((punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3)) {
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

  private isPlayerDone(player: Player): boolean {
    let done: boolean = true;
    this.settings.fields.forEach(field => {
      done = done && this.isFieldDoneForPlayer(player, field);
    });
    return done;
  }

  isActiveField(player: Player, field: string): boolean {
    return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] == field;
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr: string = field + '';
    if (field == 25) fieldStr = 'B';
    return this.settings.fields.indexOf(fieldStr) != -1 && !this.isFieldClosed(fieldStr);
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  private getPlayerState(player: Player): CricketState {
    return this.state.filter(s => s.player.id == player.id)[0];
  }

  saveState() {
    const state = [];
    this.state.forEach(s => state.push(s.clone()));
    this.stateHistory.push(state);
  }

  undoState() {
    if (this.stateHistory.length > 0) {
      this.state = this.stateHistory.pop();
    }
  }

  isLastRound(): boolean {
    return false;
  }

  canBeDraw(): boolean {
    return false;
  }

}

export class CricketState extends PlaygroundState {

  fieldCount: FieldValue[];
  punishCount: FieldValue[];
  actFieldIndex: number;

  constructor(player: Player) {
    super(player);
    this.fieldCount = [];
    this.punishCount = [];
    this.actFieldIndex = 0;
  }

  getFieldCount(field: string): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  setFieldCount(field: string, value: number) {
    this.getFieldValue(this.fieldCount, field).value = value;
  }

  getPunishCount(field: string): number {
    return this.getFieldValue(this.punishCount, field).value;
  }

  setPunishCount(field: string, value: number) {
    this.getFieldValue(this.punishCount, field).value = value;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex() {
    this.actFieldIndex++;
  }

  clone(): CricketState {
    const state: CricketState = new CricketState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.punishCount.forEach(fv => state.punishCount.push(fv.clone()));
    return state;
  }

}

export class Settings {

  fields: string[] = ['15', '16', '17', '18', '19', '20', 'B'];
  numbs: boolean[] = [];
  style: number;

  constructor() {
    this.style = 2;
    let defaultSet = false;
    for (let i = 0; i < 21; i++) {
      this.numbs[i] = defaultSet;
      if (i == 13) defaultSet = true;
    }
    this.initFields();
  }

  randomize() {
    for (let i = 0; i < this.numbs.length; i++) this.numbs[i] = false;
    for (let i = 0; i < 7; i++) this.numbs[Math.floor(Math.random() * 21)] = true;
    this.initFields();
  }

  upper() {
    this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
  }

  lower() {
    this.setAllowedField([10, 15, 2, 17, 3, 19, 7, 16, 8, 21]);
  }

  odd() {
    this.setAllowedField([1, 3, 7, 9, 11, 13, 15, 17, 19, 21]);
  }

  even() {
    this.setAllowedField([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21]);
  }

  private setAllowedField(fields: number[]) {
    for (let i = 0; i < this.numbs.length; i++) this.numbs[i] = false;
    for (let i = 0; i < fields.length; i++) this.numbs[fields[i] - 1] = true;
    this.initFields();
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < 21; i++) {
      numbers[i] = (i + 1);
    }
    return numbers;
  }

  setNumber(i: number) {
    this.numbs[i] = !this.numbs[i];
    this.initFields();
  }

  setStyle(style: number) {
    this.style = style;
  }

  initFields() {
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      if (this.numbs[i]) {
        this.fields.push(i == 20 ? 'B' : ((i + 1) + ''));
      }
    }
  }

  isScoreGame(): boolean {
    return this.style == 1;
  }

  isPunishGame(): boolean {
    return this.style == 2;
  }

  isNoScoreGame(): boolean {
    return this.style == 3;
  }

  isBlackOutGame(): boolean {
    return this.style == 4;
  }
}


