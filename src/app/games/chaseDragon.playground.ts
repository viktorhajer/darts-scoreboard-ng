import {Component, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {Player} from '../models/player.model';
import {PlaygroundState} from '../models/playground-state.model';
import {ModalComponent} from '../components/modal.component';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  templateUrl: './chaseDragon.playground.html'
})
export class ChaseDragonPlayground extends PlaygroundModel {

  @ViewChild(ModalComponent) dialog: ModalComponent;
  settings: Settings;
  state: ChaseDragonState[];
  stateHistory: ChaseDragonState[][];

  constructor(game: GameService) {
    super(game);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new ChaseDragonState(player)), this);
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
    const state: ChaseDragonState = this.getPlayerState(player);

    if (this.settings.fields[state.getActFieldIndex()] == field) {
      state.increaseActFieldIndex(1);
      if (state.actFieldIndex === this.settings.fields.length) {
        state.actFieldIndex--;
        state.bullCount++;
      }
    }
    player.score++;
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    const player = this.game.getActualPlayer();
    const state = this.getPlayerState(player);
    if ((this.settings.fields.length - 1) === state.getActFieldIndex() && state.bullCount === 2) {
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

  private getPlayerState(player: Player): ChaseDragonState {
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

export class ChaseDragonState extends PlaygroundState {

  actFieldIndex: number;
  bullCount: number;

  constructor(player: Player) {
    super(player);
    this.actFieldIndex = 0;
    this.bullCount = 0;
  }

  getActFieldIndex(): number {
    return this.actFieldIndex;
  }

  increaseActFieldIndex(value?: number) {
    this.actFieldIndex += value ? value : 1;
  }

  clone(): ChaseDragonState {
    const state: ChaseDragonState = new ChaseDragonState(this.player);
    state.actFieldIndex = this.actFieldIndex;
    state.bullCount = this.bullCount;
    return state;
  }

}

export class Settings {
  fields: string[];
  long = false;

  constructor() {
    this.setFields();
  }

  toggleLong() {
    this.long = !this.long;
    this.setFields();
  }

  setFields() {
    this.fields = [];
    for (let i = (this.long ? 9 : 14); i < 21; i++) {
      let nm: string = i == 20 ? 'B' : ((i + 1) + '');
      this.fields.push(nm);
    }
  }
}
