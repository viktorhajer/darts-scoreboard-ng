import {Component, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {PlaygroundState} from '../models/playground-state.model';
import {ModalComponent} from '../components/modal.component';
import {FieldValue} from '../models/field-value.model';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  templateUrl: './shanghai.playground.html'
})
export class ShanghaiPlayground extends PlaygroundModel {

  @ViewChild(ModalComponent) dialog: ModalComponent;
  settings: Settings;
  state: ShanghaiState[];
  stateHistory: ShanghaiState[][];

  constructor(game: GameService) {
    super(game);
    this.settings = new Settings();
    this.nextEnabled = false;
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new ShanghaiState(player)), this);
    this.stateHistory = [];
  }

  customNext() {
  }

  validateSettings(): boolean {
    return this.settings.fields.length > 0;
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const state = this.getPlayerState(player);
    const field: string = score == 25 ? 'B' : (score + '');
    if (this.isActiveField(field)) {
      state.increaseFieldCount(field, 1);
      state.increaseFieldScore(field, this.game.multiplier);
      if (this.settings.noScore) {
        player.score++;
      } else {
        player.score += this.getFieldValueAsNumber(field) * this.game.multiplier;
      }
    }
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();

    // Shanghai rule
    if (this.game.actualThrow == 3) {
      let multi = 1;
      for (let i = 0; i < 3; i++) {
        let t = player.throwsHistory[player.throwsHistory.length - i - 1];
        if (t.field == this.getPreviousField()) {
          multi *= (t.multi + 1);
        }
      }
      if (multi === 1 && this.settings.halveIt) {
        player.score = Math.round(player.score / 2);
      }
      player.win = multi == 24;
      if (player.win) {
        this.game.extraEndingMsg = 'SHANGHAI!!!';
      }
    }

    const gameEnded: boolean = (this.game.round == (this.settings.fields.length - 1))
      && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();
    if (gameEnded) {
      this.game.players.forEach(player => {
        player.win = this.game.isTheBestPlayer(player);
        if (player.win) {
          return;
        }
      }, this);
    } else if (this.game.actualThrow == 3) {
      this.game.nextPlayer();
    }

    return Promise.resolve();
  }

  getDialog(): ModalComponent {
    return this.dialog;
  }

  getFieldValue(player: Player, field: string): string {
    let fieldCount = this.getPlayerState(player).getFieldCount(field);
    if (fieldCount == 0) {
      return '○○○';
    } else {
      let str = '' + this.getPlayerState(player).getFieldScore(field) * this.getFieldValueAsNumber(field);
      for (let i = 0; i < fieldCount; i++) {
        str += '●';
      }
      for (let i = fieldCount; i < 3; i++) {
        str += '○';
      }
      return str;
    }
  }

  isActiveField(field: string): boolean {
    return this.settings.fields[this.game.round] == field;
  }

  isDoneField(field: string): boolean {
    return this.settings.fields.indexOf(field) < this.game.round;
  }

  private getPreviousField(): string {
    return this.settings.fields[this.game.round > 0 ? this.game.round : 0];
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr: string = field + '';
    if (field == 25) fieldStr = 'B';
    return this.settings.fields.indexOf(fieldStr) == this.game.round;
  }

  isHighlighted(field: number): boolean {
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    return false;
  }

  private getPlayerState(player: Player): ShanghaiState {
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
    return this.game.round == this.settings.fields.length - 1;
  }

  canBeDraw(): boolean {
    return true;
  }
}

export class ShanghaiState extends PlaygroundState {

  fieldCount: FieldValue[];
  fieldScore: FieldValue[];

  constructor(player: Player) {
    super(player);
    this.fieldCount = [];
    this.fieldScore = [];
  }

  getFieldCount(field: string): number {
    return this.getFieldValue(this.fieldCount, field).value;
  }

  increaseFieldCount(field: string, value: number) {
    this.getFieldValue(this.fieldCount, field).value += value;
  }

  getFieldScore(field: string): number {
    return this.getFieldValue(this.fieldScore, field).value;
  }

  increaseFieldScore(field: string, value: number) {
    this.getFieldValue(this.fieldScore, field).value += value;
  }

  clone(): ShanghaiState {
    let state: ShanghaiState = new ShanghaiState(this.player);
    this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
    this.fieldScore.forEach(fv => state.fieldScore.push(fv.clone()));
    return state;
  }

}

export class Settings {

  fields: string[];
  numbs: boolean[] = [];
  noScore: boolean;
  halveIt: boolean;
  numberOfMaxFields = 8;

  constructor() {
    this.fields = [];
    this.noScore = false;
    this.halveIt = false;
    let defaultSet = true;
    for (let i = 0; i < 21; i++) {
      this.numbs[i] = defaultSet;
      if (i == 19) defaultSet = false;
    }
    this.initFields();
  }

  randomize() {
    for (let i = 0; i < this.numbs.length; i++) this.numbs[i] = false;
    for (let i = 0; i < this.numberOfMaxFields; i++) {
      let rand = Math.floor(Math.random() * 21);
      while (this.numbs[rand]) {
        rand = Math.floor(Math.random() * 21);
      }
      this.numbs[rand] = true;
    }
    this.initFields();
  }

  toggleNoScore() {
    this.noScore = !this.noScore;
  }

  toggleHalveIt() {
    this.halveIt = !this.halveIt;
  }


  getNumbers() {
    let numbers: number[] = [];
    for (let i = 0; i < 21; i++) {
      numbers[i] = (i + 1);
    }
    return numbers;
  }

  setNumber(i: number) {
    this.numbs[i] = !this.numbs[i];
    this.initFields();
  }

  initFields() {
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      if (this.numbs[i]) {
        let nm: string = i == 20 ? 'B' : ((i + 1) + '');
        this.fields.push(nm);
      }
    }
  }
}
