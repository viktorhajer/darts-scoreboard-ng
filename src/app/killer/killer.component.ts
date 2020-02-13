import {Component} from '@angular/core';
import {KillerState} from './models/state.model';
import {Settings} from './models/settings.model';
import {PlaygroundModel} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';

@Component({
  templateUrl: './killer.component.html'
})
export class KillerComponent extends PlaygroundModel<KillerState> {

  settings: Settings;

  constructor(game: GameService, route: Router, dialogService: DialogService) {
    super(game, route, dialogService, 2);
    this.settings = new Settings();
    this.nextEnabled = false;
    this.zeroEnabled = false;
    this.multiEnabled = false;
  }

  customReset(): void {
    this.state = [];
    this.game.players.forEach(player =>
      this.state.push(new KillerState(player, this.settings.numberOfLives, this.settings.boardingLimit)));
  }

  customNext() {
    while (this.getPlayerState(this.game.getActualPlayer()).isDead()) {
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
          state.life = Number(state.life) + Number(this.game.multiplier);
          if (state.life > this.settings.numberOfLives) {
            state.life = this.settings.numberOfLives;
          }
        } else {
          this.game.players.filter(p => p.id !== player.id && !this.getPlayerState(p).isDead()).forEach(p => {
            const s = this.getPlayerState(p);
            if (s.actField === score) {
              s.life -= this.game.multiplier;
              if (s.life < 0) {
                s.life = 0;
              }
            }
          });
        }
      } else if (score === state.actField) {
        state.boarding -= this.game.multiplier;
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
      actualPlayer.win = !this.game.players.some(p => p.id !== actualPlayer.id && !this.getPlayerState(p).isDead());
    }
    if (this.game.round === 0 || this.game.actualThrow === 3) {
      this.game.nextPlayer();
    }
    while (this.getPlayerState(this.game.getActualPlayer()).isDead()) {
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
      const s = this.getPlayerState(p)
      return !s.isDead() && s.life < 2 && s.actField === field;
    })) {
      return 'sentiment_very_dissatisfied';
    } else if (this.game.players.some(p => {
      const s = this.getPlayerState(p)
      return s.isDead() && s.actField === field;
    })) {
      return 'highlight_off';
    }

    return '';
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

  isDead(player: Player): boolean {
    return this.getPlayerState(player).isDead();
  }

  private getAllEnabledFields(): number[] {
    return this.game.players.filter(p => !this.getPlayerState(p).isDead()).map(p => this.getPlayerState(p).actField);
  }

  private getPlayerState(player: Player): KillerState {
    return this.state.filter(s => s.player.id === player.id)[0];
  }
}
