import {Component} from '@angular/core';
import {ChaseDragonState} from './models/state.model';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';

@Component({
  templateUrl: './chase-dragon.component.html'
})
export class ChaseDragonComponent extends PlaygroundModel<ChaseDragonState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService);
    this.settings = new Settings();
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player => this.state.push(new ChaseDragonState(player)));
  }

  calculatePoints(score: number): Promise<any> {
    const player = this.game.getActualPlayer();
    const field = score === 25 ? 'B' : (score + '');
    const state: ChaseDragonState = this.getPlayerState(player);

    if (this.settings.fields[state.getActFieldIndex()] === field) {
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
    } else if (this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  isFieldEnabledToThrow(field: number): boolean {
    let fieldStr = field + '';
    if (field === 25) {
      fieldStr = 'B';
    }
    return this.settings.fields.indexOf(fieldStr) === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
  }

  isHighlighted(field: number): boolean {
    return this.isFieldEnabledToThrow(field);
  }

  isSecondHighlighted(field: number): boolean {
    let ret = false;
    if (!this.isFieldEnabledToThrow(field)) {
      let fieldStr = field + '';
      if (field === 25) {
        fieldStr = 'B';
      }
      ret = this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => this.settings.fields.indexOf(fieldStr) === this.getPlayerState(p).getActFieldIndex());
    }
    return ret;
  }

  getActualField(player): string {
    return this.settings.fields[this.getPlayerState(player).getActFieldIndex()];
  }

  isLastRound(): boolean {
    return false;
  }

  canBeDraw(): boolean {
    return false;
  }

  private getPlayerState(player: Player): ChaseDragonState {
    return this.state.filter(s => s.player.id === player.id)[0];
  }
}
