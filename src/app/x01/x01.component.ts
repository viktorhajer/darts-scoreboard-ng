import {Component} from '@angular/core';
import {Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {X01Settings} from './models/x01.settings.model';
import {SoundService} from '~services/sound.service';
import {StatisticsService} from '~services/statistics.service';
import {BotService, PLAYER_DELAY} from '~services/bot.service';

@Component({
    templateUrl: './x01.component.html',
    animations: [slideInAnimation],
    standalone: false
})
export class X01Component extends Playground<PlaygroundState> {

  settings: X01Settings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super('X01', application, game, route, dialogService, soundService, botService, statisticsService, 'x01');
    this.settings = new X01Settings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    const validStart = !player.first || this.settings.isNormalStart()
      || (player.first
        && ((this.settings.isDoubleStart() && this.multiplier === 2)
          || (this.settings.isTripleStart() && this.multiplier === 3)));
    if (validStart) {
      const actualScore = score * this.multiplier;
      player.first = false;
      player.score -= actualScore;
    }
  }

  checkPlayerState(player: Player) {
    let next = false;
    if (this.settings.saboteur || this.settings.punishment) {
      this.game.players.filter(p => p.id !== player.id && p.score === player.score).forEach(p => {
        if (this.settings.saboteur) {
          p.score = this.settings.startValue;
        } else {
          player.score = this.settings.startValue;
        }
      });
    }
    if ((this.settings.isHighScoreGame() && player.score <= 0) ||
      ((player.score === 0 && (this.settings.isNormalCheckout()
        || (this.settings.isDoubleCheckout() && this.multiplier === 2)
        || (this.settings.isTripleCheckout() && this.multiplier === 3))))) {
      player.setWin();
      next = true;
    } else if (player.score <= 0
      || (this.settings.isDoubleCheckout() && player.score < 2)
      || (this.settings.isTripleCheckout() && player.score < 3)) {
      player.throws.forEach(t => player.score += t);
      next = true;
      this.dialogService.openErrorDialog(`${this.game.getActualPlayer().name} busted!`);
    }
    if (this.game.isTheLastThrow() || next) {
      this.game.nextPlayer();
    }
  }

  customReset() {
    this.game.players.forEach(player => player.score = this.settings.startValue);
  }

  getGameConfig(): string {
    return this.settings.startValue + '';
  }

  botThrow() {
    let target = Math.floor(Math.random() * 10) + 10;

    if (!this.settings.isHighScoreGame()) {
      const player = this.game.getActualPlayer();
      if (player.score <= 20) {
        if (this.settings.isNormalCheckout()) {
          target = player.score - 1;
        } else if (this.settings.isDoubleCheckout() && (player.score % 2) === 0) {
          target = player.score / 2 - 1;
          this.doublePoint();
        } else if (this.settings.isDoubleCheckout() && (player.score % 2) === 1) {
          target = 0;
        } else if (this.settings.isTripleCheckout() && (player.score % 3) === 0) {
          target = player.score / 3 - 1;
          this.triplePoint();
        } else if (this.settings.isTripleCheckout() && (player.score % 3) === 1) {
          target = 0;
        } else if (this.settings.isTripleCheckout() && (player.score % 3) === 2) {
          target = 1;
        }
      }
    } else {
      if (this.botService.isDoublePoint()) {
        this.doublePoint();
      } else if (this.botService.isTriplePoint()) {
        this.triplePoint();
      }
    }
    const index = this.botService.calculateTarget(target);
    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? Playground.getFieldValueFromIndex(index) : 0,
        Playground.getFieldValueFromIndex(index)]);
    }, PLAYER_DELAY);
  }

  getInfo(): number {
    return  this.game.getActualPlayer().score;
  }

  isPrimaryField(fieldIndex: number): boolean {
    return true;
  }
}
