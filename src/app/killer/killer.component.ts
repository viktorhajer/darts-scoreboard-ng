import {Component} from '@angular/core';
import {Playground} from '../shared/models/playground.model';
import {GameService} from '../shared/services/game.service';
import {Player} from '../shared/models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '../shared/services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {KillerState} from './models/killer.state.model';
import {KillerSettings} from './models/killer.settings.model';
import {SoundService} from '../shared/services/sound.service';
import {StatisticsService} from '../shared/services/statistics.service';
import {BotService} from '../shared/services/bot.service';

const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';

@Component({
    templateUrl: './killer.component.html',
    animations: [slideInAnimation],
    standalone: false
})
export class KillerComponent extends Playground<KillerState> {

  settings: KillerSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super('Killer', application, game, route, dialogService, soundService, botService, statisticsService, 'killer', 2);
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
          player.life = 0;
          this.extraEndingMsg = 'SUICIDE!!!';
        } else if (fieldIndex === state.actField) {
          player.life = Number(player.life) + Number(this.multiplier);
          if (player.life > this.settings.numberOfLives) {
            player.life = this.settings.numberOfLives;
          }
        } else {
          this.game.players.filter(p => p.id !== player.id && !p.isInactive()).forEach(p => {
            const s = this.getPlayerState(p);
            if (fieldIndex === s.actField) {
              p.life -= this.multiplier;
              this.soundService.no();
              if (p.life < 0) {
                p.life = 0;
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
      const activePlayers = this.game.players.filter(p => !p.isInactive());
      this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !p.isInactive()));
    }
    if (this.game.round === 0 || this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
    while (this.game.getActualPlayer().isInactive()) {
      this.game.nextPlayer();
    }
  }

  override isFieldEnabled(fieldIndex: number): boolean {
    if (this.game.round === 0) {
      return fieldIndex !== 20 && !this.getAllEnabledFields().some(f => f === fieldIndex);
    }
    return this.getAllEnabledFields().some(f => f === fieldIndex);
  }

  override isPrimaryField(fieldIndex: number): boolean {
    if (this.game.round === 0) {
      return this.isFieldEnabled(fieldIndex);
    }
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return this.isFieldEnabled(fieldIndex) && !this.isSecondaryField(fieldIndex);
    }
    return state.actField === fieldIndex;
  }

  override isSecondaryField(fieldIndex: number): boolean {
    const state = this.getPlayerState(this.game.getActualPlayer());
    if (state.killer) {
      return state.actField === fieldIndex;
    }
    return false;
  }

  override getFieldIcon(fieldIndex: number): string {
    if (this.game.players.some(p => {
      const state = this.getPlayerState(p);
      return !p.isInactive() && p.life <= 3 && state.actField === fieldIndex;
    })) {
      return DANGER_ZONE_ICON;
    }
    return '';
  }

  override getFieldNote(fieldIndex: number): string {
    const owner = this.game.players.find(p => (p.state as KillerState).actField === fieldIndex);

    if (owner) {
      const shortName = owner.name.substr(0, 1);
      const boarding = (owner.state as KillerState).boarding;
      if ((owner.state as KillerState).killer) {
        return `${shortName}: ${owner.life}`;
      }
      return `${shortName}: ${boarding + ' - ' + owner.life}`;
    }
    return '';
  }

  getPlayerField(player: Player): string {
    const fieldIndex = this.getPlayerState(player).actField;
    return fieldIndex === 20 ? 'B' : (fieldIndex + 1) + '';
  }

  customReset() {
    this.game.players.forEach(player => {
      player.state = new KillerState(this.settings.boardingLimit);
      player.life = this.settings.numberOfLives;
    });
  }

  override customSettingsValidation(): boolean {
    return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
  }

  override decoratePlayerStat(player: Player): string {
    return player.name;
  }

  override getGameConfig(): string {
    return this.settings.boardingLimit + ',' + this.settings.numberOfLives;
  }

  private getAllEnabledFields(): number[] {
    return this.game.players.filter(p => !p.isInactive())
      .map(p => this.getPlayerState(p).actField);
  }
}
