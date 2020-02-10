import {Component, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {PlaygroundState} from '../models/playground-state.model';
import {ModalComponent} from '../components/modal.component';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  templateUrl: './aroundclock.playground.html'
})
export class AroundClockPlayground extends PlaygroundModel {

  @ViewChild(ModalComponent) dialog: ModalComponent;
  settings: Settings;
  state: AroundClockState[];
  stateHistory: AroundClockState[][];

  constructor(game: GameService) {
    super(game);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new AroundClockState(player)), this);
    this.stateHistory = [];
  }

  customNext() {
  }


  validateSettings(): boolean {
    return this.settings.fields.length > 0;
  }

  calculatePoints(score: number): Promise<any> {

    const player = this.game.getActualPlayer();
    const field: string = score == 25 ? 'B' : (score + '');
    const state: AroundClockState = this.getPlayerState(player);
    if (this.settings.fields[state.getActFieldIndex()] == field) {
      // last throw
      if (state.actFieldIndex >= this.settings.fields.length - this.game.multiplier) {
        this.game.multiplier = this.game.multiplier == 1 ? 1 : this.settings.fields.length - (state.actFieldIndex + 1);
      }
      state.increaseActFieldIndex(this.settings.jump ? this.game.multiplier : 1);
      if (state.actFieldIndex >= this.settings.fields.length) {
        state.actFieldIndex = this.settings.fields.length;
      }
    }
    player.score++;
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    if ((this.settings.fields.length - 1) < this.getPlayerState(player).getActFieldIndex()) {
      player.win = true;
    } else if (this.game.actualThrow == 3) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  getDialog(): ModalComponent {
    return this.dialog;
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr: string = field + '';
    if (field == 25) fieldStr = 'B';
    return this.settings.fields.indexOf(fieldStr) == this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field);
  }

  isSecondHighlighted(field: number): boolean {
    let ret: boolean = false;
    if (!this.isFieldEnabledToThrow(field)) {
      let fieldStr: string = field + '';
      if (field == 25) fieldStr = 'B';
      this.game.players.forEach(player => {
        if (player != this.game.getActualPlayer()) {
          ret = this.settings.fields.indexOf(fieldStr) == this.getPlayerState(player).getActFieldIndex();
          if (ret) {
            return;
          }
        }
      });
    }
    return ret;
  }

  getActualField(player): string {
    return this.settings.fields[this.getPlayerState(player).getActFieldIndex()];
  }

  private getPlayerState(player: Player): AroundClockState {
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

export class AroundClockState extends PlaygroundState {

  actFieldIndex: number;

  constructor(player: Player) {
    super(player);
    this.actFieldIndex = 0;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  clone(): AroundClockState {
    const state: AroundClockState = new AroundClockState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    return state;
  }

}

export class Settings {
  fields: string[];
  jump: boolean;

  constructor() {
    this.jump = true;
    this.fields = [];
    for (let i = 0; i < 21; i++) {
      let nm: string = i == 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }

  toggleJump() {
    this.jump = !this.jump;
  }
}
