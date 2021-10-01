import {Component} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {StatisticsService} from '~services/statistics.service';
import {DialogService} from '~services/dialog.service';
import {routes} from '../../../app-game-types';

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private readonly router: Router,
              private readonly dialog: DialogService,
              private readonly statisticsService: StatisticsService) {
  }

  randomGame() {
    const random = Math.floor(Math.random() * routes.length);
    this.router.navigate(['/' + routes[random].path]);
  }

  getGameList(): Routes {
    return routes.filter(r => !!r.data);
  }

  openGameTypeStatistics() {
    this.dialog.openGameTypeStatistics(this.statisticsService.getGameTypeStatistics());
    // this.statisticsService.printStatistics();
  }

  openGameStatistics() {
    this.dialog.openGameHistory(this.statisticsService.getGameStatistics());
  }
}
