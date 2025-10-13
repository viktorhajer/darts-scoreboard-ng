import {Component} from '@angular/core';
import {FIELDS_COUNT, Playground} from '../shared/models/playground.model';
import {GameService} from '../shared/services/game.service';
import {Player} from '../shared/models/player.model';
import {Router} from '@angular/router';
import {DialogService} from '../shared/services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {HareAndHoundSettings} from './models/hare-and-hound.settings.model';
import {HareAndHoundState} from './models/hare-and-hound.state.model';
import {SoundService} from '../shared/services/sound.service';
import {STAT_NAME_SEPARATOR, StatisticsService} from '../shared/services/statistics.service';
import {BotService} from '../shared/services/bot.service';
import {SoundControlService} from '../shared/services/sound-control.service';

@Component({
    templateUrl: './hare-and-hound.component.html',
    animations: [slideInAnimation],
    standalone: false
})
export class HareAndHoundComponent extends Playground<HareAndHoundState> {

  settings: HareAndHoundSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService,
              statisticsService: StatisticsService, soundControl: SoundControlService) {
    super('Hare and Hound', application, game, route, dialogService, soundService, botService,
      statisticsService, soundControl, 'hare-hound', 2, 2);
    this.settings = new HareAndHoundSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const state = this.getPlayerState(player);
    if (this.isFieldEnabled(fieldIndex, state.actFieldIndex)) {
      state.increaseActFieldIndex(this.multiplier);
      if (state.actFieldIndex >= (FIELDS_COUNT - 1)) {
        state.actFieldIndex = state.actFieldIndex - (FIELDS_COUNT - 1);
      }
      player.score -= this.multiplier;
    }
  }

  checkPlayerState(player: Player) {
    player.setWin((this.isHare() && player.score <= 0) ||
      // @ts-ignore
      (!this.isHare() &&  (player.score + this.settings.getHareStartIndex()) <= this.game.players.find(p => this.isHare(p)).score));

    if (!player.win && this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  override isFieldEnabled(fieldIndex: number, actFieldIndex?: number): boolean {
    if (!actFieldIndex) {
      actFieldIndex = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
    }
    return fieldIndex === this.getFieldIndex(actFieldIndex);
  }

  override isPrimaryField(fieldIndex: number): boolean {
    return this.isFieldEnabled(fieldIndex);
  }

  override isSecondaryField(fieldIndex: number): boolean {
    if (!this.isFieldEnabled(fieldIndex)) {
      return this.game.players.some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
    }
    return false;
  }

  override getFieldNote(fieldIndex: number): string {
    const owners = this.game.players
      .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex)
      .map(p => p.name.substr(0, 1));
    return !!owners.length ? owners.join(',') : '';
  }

  override getFieldIcon(fieldIndex: number): string {
    if (!this.isPrimaryField(fieldIndex) && !this.isSecondaryField(fieldIndex)) {
      return '';
    }
    return (this.isHare() && this.isPrimaryField(fieldIndex) || (this.isSecondaryField(fieldIndex) && !this.isHare())) ? 'favorite' : 'directions_run';
  }

  customReset() {
    this.game.players.forEach((player, index) => {
      player.score = FIELDS_COUNT - 1;
      if (index === 0) {
        player.state = new HareAndHoundState(this.settings.getHareStartIndex());
      } else {
        player.state = new HareAndHoundState(0);
      }
    });
  }

  override decoratePlayerStat(player: Player): string {
    return player.name + STAT_NAME_SEPARATOR + `${this.isHare(player) ? '0' : '1'}`;
  }

  override getGameConfig(): string {
    return (20 - HareAndHoundSettings.getBaseFields().indexOf(this.settings.houndStartIndex)) + '';
  }

  private getFieldIndex(index: number) {
    return this.settings.getFields()[index];
  }

  private isHare(player?: Player) {
    if (!player) {
      player = this.game.getActualPlayer();
    }
    return this.game.players.map(p => p.id).indexOf(player.id) === 0;
  }
}
