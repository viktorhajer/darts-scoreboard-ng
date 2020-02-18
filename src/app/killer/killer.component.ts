import {Component} from '@angular/core';
import {KillerState} from './models/state.model';
import {Settings} from './models/settings.model';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  templateUrl: './killer.component.html',
  animations: [slideInAnimation],
})
export class KillerComponent extends Playground<KillerState> {

  settings: Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService, 2);
    this.settings = new Settings();
    this.nextEnabled = false;
    this.zeroEnabled = false;
    this.multiEnabled = false;
  }

  customReset() {
    this.game.players.forEach(player =>
      player.state = new KillerState(this.settings.numberOfLives, this.settings.boardingLimit));
  }

  customNext() {
    while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
      this.game.nextPlayer();
    }
  }

  customSettingsValidation(): boolean {
    return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
  }

  calculatePoints(score: number): Promise<any> {

    const player = this.game.getActualPlayer();
    const state: KillerState = this.getPlayerState(player);

    if (this.game.round === 0) {
      state.actField = score;
      player.score = score;
      if (this.game.isActualPlayerTheLast()) {
        this.nextEnabled = true;
        this.zeroEnabled = true;
        this.multiEnabled = true;
      }
    } else {
      if (state.killer) {
        if (score === state.actField) {
          state.life = Number(state.life) + Number(this.multiplier);
          if (state.life > this.settings.numberOfLives) {
            state.life = this.settings.numberOfLives;
          }
        } else {
          this.game.players.filter(p => p.id !== player.id && !this.getPlayerState(p).isInactive()).forEach(p => {
            const s = this.getPlayerState(p);
            if (s.actField === score) {
              s.life -= this.multiplier;
              if (s.life < 0) {
                s.life = 0;
              }
            }
          });
        }
      } else if (score === state.actField) {
        state.boarding -= this.multiplier;
        if (state.boarding <= 0) {
          state.boarding = 0;
        }
        state.killer = state.boarding === 0;
      }
    }
    return Promise.resolve();
  }

  checkPlayerState(): Promise<any> {
    if (this.game.round !== 0) {
      const actualPlayer = this.game.getActualPlayer();
      actualPlayer.setWin(!this.game.players.some(p =>
        p.id !== actualPlayer.id && !this.getPlayerState(p).isInactive()));
    }
    if (this.game.round === 0 || this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }
    while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
      this.game.nextPlayer();
    }
    return Promise.resolve();
  }

  isFieldEnabledToThrow(field: number): boolean {
    if (this.game.round === 0) {
      return field !== 25 && !this.getAllEnabledFields().some(f => f === field);
    }
    return this.getAllEnabledFields().some(f => f === field);
  }

  isHighlighted(field: number): boolean {
    if (this.game.round === 0) {
      return this.isFieldEnabledToThrow(field);
    }
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return this.isFieldEnabledToThrow(field) && !this.isSecondHighlighted(field);
    }
    return state.actField === field;
  }

  isSecondHighlighted(field: number): boolean {
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return state.actField === field;
    }
    return false;
  }

  getFieldIcon(field: number): string {
    if (this.game.players.some(p => {
      const state = this.getPlayerState(p);
      return !state.isInactive() && state.life <= 3 && state.actField === field;
    })) {
      return 'sentiment_very_dissatisfied';
    } else if (this.game.players.some(p => {
      const state = this.getPlayerState(p);
      return state.isInactive() && state.actField === field;
    })) {
      return 'highlight_off';
    }

    return '';
  }

  getFieldNote(field: number): string {
    const owner = this.game.players.find(p => (p.state as KillerState).actField === field);
    return owner ? `${owner.name}(${(owner.state as KillerState).life})` : '';
  }

  getPlayerField(player: Player): string {
    const score = this.getPlayerState(player).actField;
    return score === 25 ? 'B' : (score + '');
  }

  getLife(player: Player): number {
    return this.getPlayerState(player).life;
  }

  getBoarding(player: Player): number {
    return this.getPlayerState(player).boarding;
  }

  isKiller(player: Player): boolean {
    return this.getPlayerState(player).killer;
  }

  isInactive(player: Player): boolean {
    return this.getPlayerState(player).isInactive();
  }

  private getAllEnabledFields(): number[] {
    return this.game.players.filter(p => !this.getPlayerState(p).isInactive())
      .map(p => this.getPlayerState(p).actField);
  }
}
