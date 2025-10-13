import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {GameStatistics} from '../../models/game-statistics.model';
import {STAT_NAME_SEPARATOR} from '../../services/statistics.service';
import {environment} from '../../../../environments/environment';

@Component({
    templateUrl: 'game-history-dialog.component.html',
    styleUrls: ['game-history-dialog.component.scss'],
    standalone: false
})
export class GameHistoryDialogComponent {
  constructor(protected dialogRef: MatDialogRef<GameHistoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { statistics: GameStatistics[] }) {
    data.statistics.sort((a, b) => new Date(b.s).getTime() - new Date(a.s).getTime());
  }

  getDuration(stat: GameStatistics): Date {
    return new Date(new Date(stat.f).getTime() - new Date(stat.s).getTime());
  }

  getPlayers(players: string[]): string[] {
    return players.map(p => {
      const pna = p.split(STAT_NAME_SEPARATOR);
      let result = pna[0];
      if (pna.length === 2) {
        result += '(' + pna[1] + ')';
      }
      return result;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  getAppVersion(): string {
    return environment.appVersion ? environment.appVersion : '';
  }
}
