import {Injectable} from '@angular/core';
import {StorageService} from '~services/storage.service';
import {GameStatisticsModel} from '~models/game-statistics.model';

const STATISTICS_STORAGE_KEY = 'statistics';

@Injectable({providedIn: 'root'})
export class StatisticsService {

  constructor(private readonly storageService: StorageService) {
  }

  saveStatistics(statistics: GameStatisticsModel) {
    const stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);
    if (stat) {
      stat.push(statistics);
      this.storageService.setObject(STATISTICS_STORAGE_KEY, stat);
    } else {
      this.storageService.setObject(STATISTICS_STORAGE_KEY, [statistics]);
    }
  }
}
