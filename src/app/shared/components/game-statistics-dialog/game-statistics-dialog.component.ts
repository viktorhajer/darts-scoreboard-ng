import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {PlayerStatistics} from '../../models/player-statistics.model';

@Component({
    templateUrl: 'game-statistics-dialog.component.html',
    styleUrls: ['game-statistics-dialog.component.scss'],
    standalone: false
})
export class GameStatisticsDialogComponent {
  constructor(protected dialogRef: MatDialogRef<GameStatisticsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { statistics: PlayerStatistics[] }) {
    data.statistics.sort((a, b) => this.getRatio(b) - this.getRatio(a));
  }

  getRatio(stat: PlayerStatistics): number {
    return Math.round(stat.w / (stat.w + stat.l) * 100);
  }

  close(): void {
    this.dialogRef.close();
  }
}
