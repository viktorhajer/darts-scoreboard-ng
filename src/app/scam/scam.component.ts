import {Component} from '@angular/core';
import {FIELDS_COUNT, Playground} from '~models/playground.model';
import {GameService} from '~services/game.service';
import {Player} from '~models/player.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {slideInAnimation} from '../route-animation';
import {ApplicationStateService} from '~services/application-state.service';
import {ScamSettings} from './models/scam.settings.model';
import {SoundService} from '~services/sound.service';
import {StatisticsService} from '~services/statistics.service';
import {BotService, PLAYER_DELAY_FAST} from '~services/bot.service';

@Component({
  templateUrl: './scam.component.html',
  animations: [slideInAnimation],
})
export class ScamComponent extends Playground<PlaygroundState> {

  settings: ScamSettings;

  constructor(application: ApplicationStateService, game: GameService, route: Router,
              dialogService: DialogService, soundService: SoundService, botService: BotService, statisticsService: StatisticsService) {
    super(application, game, route, dialogService, soundService, botService, statisticsService, 'scam', 2);
    this.settings = new ScamSettings();
  }

  calculatePoints(player: Player, fieldIndex: number, score: number) {
    if (!!this.game.numbs[fieldIndex]) {
      if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
        this.game.numbs[fieldIndex] = 0;
      } else if (this.settings.stopper) {
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
      } else {
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
        this.game.numbs[fieldIndex] = 0;
      }
    } else if (this.settings.punishment && ((this.settings.stopper && !this.game.isTheFirstPlayer(player)) || !this.settings.stopper)) {
      const newScore = score === 0 ? this.settings.punishmentValue : score;
      const scr = (this.settings.isNoScoreGame() ? 1 : newScore) * this.multiplier;
      player.score -= scr;
    }
  }

  checkPlayerState(player: Player) {
    if (!this.game.numbs.some(n => n)) {
      const bests = this.game.getTheBestPlayers();
      this.game.players.forEach(p => p.setWin(bests.some(b => b.name === p.name)));
    }
    if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }

  isPrimaryField(fieldIndex: number): boolean {
    return !!this.game.numbs[fieldIndex];
  }

  isAlertField(fieldIndex: number): boolean {
    return this.settings.punishment && !this.game.numbs[fieldIndex];
  }

  isFieldEnabled(fieldIndex: number): boolean {
    return this.settings.punishment || !!this.game.numbs[fieldIndex];
  }

  customReset() {
    this.game.numbs = this.settings.numbs.map(i => i ? 1 : 0);
    this.settings.fields.forEach(f => this.settings.numbs[f] = true);
  }

  getGameConfig(): string {
    return this.settings.fields.length + '';
  }

  botThrow() {
    let fields = [...Array(FIELDS_COUNT).keys()];
    if (this.settings.reverse) {
      fields.reverse();
    }
    fields = fields.filter(index => this.game.numbs[index]).slice(-4).slice(0, 3);
    const index = this.botService.calculateMultiTarget(fields);
    if (this.botService.isDoublePoint()) {
      this.doublePoint();
    } else if (this.botService.isTriplePoint()) {
      this.triplePoint();
    }
    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? Playground.getFieldValueFromIndex(index) : 0,
        Playground.getFieldValueFromIndex(index)]);
    }, PLAYER_DELAY_FAST);
  }
}
