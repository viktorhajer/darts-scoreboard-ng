import {Injectable} from '@angular/core';
import {StorageService} from '~services/storage.service';
import {GameStatistics} from '~models/game-statistics.model';
import {GameTypeStatistics} from '~models/game-type-statistics.model';

export const STAT_NAME_SEPARATOR = '____';
const STATISTICS_STORAGE_KEY = 'statistics';

@Injectable({providedIn: 'root'})
export class StatisticsService {

  constructor(private readonly storageService: StorageService) {
  }

  saveStatistics(statistics: GameStatistics) {
    const stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);
    if (stat) {
      stat.push(statistics);
      this.storageService.setObject(STATISTICS_STORAGE_KEY, stat);
    } else {
      this.storageService.setObject(STATISTICS_STORAGE_KEY, [statistics]);
    }
  }

  getGameStatistics(gameName?: string): GameStatistics[] {
    let statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY);
    if (!statistics) {
      statistics = [];
    }
    return gameName ? statistics.filter(i => i.g === gameName) : statistics;
  }

  getPlayerStatistics(playerName: string, gameName?: string): GameStatistics[] {
    const playerStat = this.storageService.getObject(STATISTICS_STORAGE_KEY).filter(i =>
      i.l.some(p => p.indexOf(playerName) !== -1) ||
      i.w.some(p => p.indexOf(playerName) !== -1));
    return gameName ? playerStat.filter(i => i.g === gameName) : playerStat;
  }

  getGameTypeStatistics(): GameTypeStatistics[] {
    let statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY) as GameStatistics[];
    const games: GameTypeStatistics[] = [];
    if (!statistics) {
      statistics = [];
    }
    statistics.forEach(s => {
      let type = games.find(g => g.name === s.g);
      if (!type) {
        type = {name: s.g, count: 0};
        games.push(type);
      }
      type.count++;
    });
    return games;
  }

  printStatistics() {
    console.log(JSON.stringify(this.storageService.getObject(STATISTICS_STORAGE_KEY)));
  }
}
