import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {KillerState} from './models/killer.state.model';
import {KillerSettings} from './models/killer.settings.model';

const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';

@Component({
  templateUrl: './killer.component.html',
  animations: [slideInAnimation],
})
export class KillerComponent extends Playground<KillerState> {

  settings: KillerSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router, dialogService: DialogService) {
    super(application, game, route, dialogService, 2);
    this.settings = new KillerSettings();
    this.nextEnabled = false;
    this.zeroEnabled = false;
    this.multiEnabled = false;
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.game.round === 0) {
      state.actField = fieldIndex;
      player.score = score;
      if (this.game.isActualPlayerTheLast()) {
        this.nextEnabled = true;
        this.zeroEnabled = true;
        this.multiEnabled = true;
      }
    } else {
      if (state.killer) {
        if (this.settings.suicide && fieldIndex === state.actField && this.multiplier > 1) {
          state.life = 0;
          this.extraEndingMsg = 'SUICIDE!!!';
        } else if (fieldIndex === state.actField) {
          state.life = Number(state.life) + Number(this.multiplier);
          if (state.life > this.settings.numberOfLives) {
            state.life = this.settings.numberOfLives;
          }
        } else {
          this.game.players.filter(p => p.id !== player.id && !this.getPlayerState(p).isInactive()).forEach(p => {
            const s = this.getPlayerState(p);
            if (fieldIndex === s.actField) {
              s.life -= this.multiplier;
              if (s.life < 0) {
                s.life = 0;
              }
            }
          });
        }
      } else if (fieldIndex === state.actField) {
        state.boarding -= this.multiplier;
        if (state.boarding <= 0) {
          state.boarding = 0;
        }
        state.killer = state.boarding === 0;
      }
    }
  }

  checkPlayerState(player: Player) {
    if (this.game.round !== 0) {
      const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
      this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !this.getPlayerState(p).isInactive()));
    }
    if (this.game.round === 0 || this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
    while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
      this.game.nextPlayer();
    }
  }

  isFieldEnabled(fieldIndex: number): boolean {
    if (this.game.round === 0) {
      return fieldIndex !== 20 && !this.getAllEnabledFields().some(f => f === fieldIndex);
    }
    return this.getAllEnabledFields().some(f => f === fieldIndex);
  }

  isPrimaryField(fieldIndex: number): boolean {
    if (this.game.round === 0) {
      return this.isFieldEnabled(fieldIndex);
    }
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return this.isFieldEnabled(fieldIndex) && !this.isSecondaryField(fieldIndex);
    }
    return state.actField === fieldIndex;
  }

  isSecondaryField(fieldIndex: number): boolean {
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return state.actField === fieldIndex;
    }
    return false;
  }

  getFieldIcon(fieldIndex: number): string {
    if (this.game.players.some(p => {
      const state = this.getPlayerState(p);
      return !state.isInactive() && state.life <= 3 && state.actField === fieldIndex;
    })) {
      return DANGER_ZONE_ICON;
    }
    return '';
  }

  getFieldNote(fieldIndex: number): string {
    const owner = this.game.players.find(p => (p.state as KillerState).actField === fieldIndex);
    return owner ? `${owner.name}(${(owner.state as KillerState).life})` : '';
  }

  getPlayerField(player: Player): string {
    const fieldIndex = this.getPlayerState(player).actField;
    return fieldIndex === 20 ? 'B' : (fieldIndex + 1) + '';
  }

  isInactive(player: Player): boolean {
    return this.getPlayerState(player).isInactive();
  }

  customReset() {
    this.game.players.forEach(player =>
      player.state = new KillerState(this.settings.numberOfLives, this.settings.boardingLimit));
  }

  customSettingsValidation(): boolean {
    return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
  }

  private getAllEnabledFields(): number[] {
    return this.game.players.filter(p => !this.getPlayerState(p).isInactive())
      .map(p => this.getPlayerState(p).actField);
  }
}
