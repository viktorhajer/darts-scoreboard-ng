import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {slideInAnimation} from '../route-animation';
import {AroundClockState} from './models/around-clock.state.model';
import {AroundClockSettings} from './models/around-clock.settings.model';
import {Player} from '../shared/models/player.model';
import {ApplicationStateService} from '../shared/services/application-state.service';
import {GameService} from '../shared/services/game.service';
import {SoundService} from '../shared/services/sound.service';
import {DialogService} from '../shared/services/dialog.service';
import {BotService, PLAYER_DELAY} from '../shared/services/bot.service';
import {StatisticsService} from '../shared/services/statistics.service';
import {Playground} from '../shared/models/playground.model';

@Component({
  templateUrl: './around-clock.component.html',
  animations: [slideInAnimation],
  standalone: false
})
export class AroundClockComponent extends Playground<AroundClockState> {

  settings: AroundClockSettings;
  hiddenInfo = true;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super('Around The Clock', application, game, route, dialogService, soundService, botService, statisticsService, 'around-clock', 2);
    this.settings = new AroundClockSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number, scoreReal: number) {
    const state = this.getPlayerState(player);
    const originalMulti = this.multiplier;
    const targetedField = this.getFieldIndex(state.actFieldIndex) === fieldIndex;
    const hasChanges = this.handlePromoterSaboteur(player, scoreReal, originalMulti, targetedField);
    if (hasChanges && score != 0) {
      player.throwsHistory[player.throwsHistory.length - 1].score = 0;
    }
    if (!hasChanges && targetedField) {
      // last throw
      if (state.actFieldIndex >= this.settings.fields.length - this.multiplier) {
        this.multiplier = this.multiplier === 1 ? 1 : this.settings.fields.length - (state.actFieldIndex + 1);
      }
      state.increaseActFieldIndex(this.settings.jump ? this.multiplier : 1);
      if (state.actFieldIndex >= this.settings.fields.length) {
        state.actFieldIndex = this.settings.fields.length;
      }
    }
    player.score++;
  }

  checkPlayerState(player: Player) {
    const state = this.getPlayerState(player);
    if ((this.settings.fields.length - 1) < state.actFieldIndex) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
      if (this.settings.punishment || this.settings.life !== 0) {
        let multi = 0;
        for (let i = 0; i < 3; i++) {
          const t = player.throwsHistory[player.throwsHistory.length - i - 1];
          multi += t.score;
        }
        if (multi === 0) {
          if (this.settings.punishment) {
            state.decreaseActFieldIndex();
          }
          if (this.settings.life !== 0) {
            this.soundService.no();
            player.life--;
          }
        }
      }
      this.game.nextPlayer();
    }

    if (this.settings.firstDeath) {
      const activePlayers = this.game.players.filter(p => !p.isInactive());
      if (activePlayers.length < this.game.players.length) {
        this.getTheBestPlayers().forEach(p => p.setWin(true));
      }
    }

    if (this.settings.life !== 0 && this.game.players.length > 1) {
      const activePlayers = this.game.players.filter(p => !p.isInactive());
      if (activePlayers.length === 1) {
        activePlayers[0].setWin(true);
      } else if (!!activePlayers.length) {
        while (this.game.getActualPlayer().isInactive()) {
          this.game.nextPlayer();
        }
      }
    }
  }

  override botThrow() {
    const state = this.getPlayerState(this.game.getActualPlayer());
    const target = this.getFieldIndex(state.actFieldIndex);
    const index = this.botService.calculateTarget(target);

    if (target === index && this.botService.isDoublePoint()) {
      this.doublePoint();
    } else if (target === index && this.botService.isTriplePoint()) {
      this.triplePoint();
    }

    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? Playground.getFieldValueFromIndex(index) : 0,
        Playground.getFieldValueFromIndex(index)]);
    }, PLAYER_DELAY);
  }

  getDistanceFromRandom(): string {
    if (this.settings.style === 3) {
      const bullPos = this.settings.fields.findIndex(f => f === 20);
      const playerPos = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
      const diff = bullPos - playerPos;
      return diff >= 0 ? diff + '' : '';
    }
    return '';
  }

  toggleHiddenInfo() {
    this.hiddenInfo = !this.hiddenInfo;
  }

  override isFieldEnabled(fieldIndex: number): boolean {
    return this.game.players.some(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex);
  }

  override isPrimaryField(fieldIndex: number): boolean {
    return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
  }

  override isSecondaryField(fieldIndex: number): boolean {
    if (!this.isPrimaryField(fieldIndex)) {
      return this.game.players.filter(p => p !== this.game.getActualPlayer())
        .some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
    }
    return false;
  }

  override getFieldNote(fieldIndex: number): string {
    const owners = this.game.players
      .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name.substr(0, 1));
    return !!owners.length ? owners.join(',') : '';
  }

  customReset() {
    this.game.players.forEach(player => {
      player.life = this.settings.life;
      player.state = new AroundClockState();
    });
    this.settings.setStyle();
  }

  override decoratePlayerStat(player: Player): string {
    return player.name;
  }

  private getTheBestPlayers(): Player[] {
    const activePlayers = this.game.players.filter(p => !p.isInactive());
    let max = 0;
    activePlayers.forEach(p => {
      const index = this.getPlayerState(p).actFieldIndex;
      max = index > max ? index : max;
    });
    return activePlayers.filter(p => this.getPlayerState(p).actFieldIndex === max);
  }

  private getFieldIndex(index: number) {
    return this.settings.fields[index];
  }

  private handlePromoterSaboteur(player: Player, scoreReal: number, originalMulti: number, targetedField: boolean): boolean {
    let hasChanges = false;
    if ((this.settings.saboteur || this.settings.promoter) && scoreReal !== 0) {
      const realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
      this.game.players.filter(p => p.id !== player.id).forEach(otherPlayer => {
        const otherPlayerState = this.getPlayerState(otherPlayer);
        if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && (!targetedField || (this.settings.palFirst && otherPlayerState.actFieldIndex != 0))) {
          if (this.settings.saboteur) {
            hasChanges = true;
            otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
          } else if (otherPlayerState.actFieldIndex !== this.settings.fields.length - 1) {
            otherPlayerState.increaseActFieldIndex(this.settings.jump ? originalMulti : 1);
            if (otherPlayerState.actFieldIndex >= this.settings.fields.length) {
              otherPlayerState.actFieldIndex = this.settings.fields.length - 1;
            }
            hasChanges = true;
          }
        }
      });
    }
    return hasChanges;
  }
}
