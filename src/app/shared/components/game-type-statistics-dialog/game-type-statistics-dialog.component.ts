import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {GameTypeStatistics} from '../../models/game-type-statistics.model';

@Component({
    templateUrl: 'game-type-statistics-dialog.component.html',
    styleUrls: ['game-type-statistics-dialog.component.scss'],
    standalone: false
})
export class GameTypeStatisticsDialogComponent {
  constructor(protected dialogRef: MatDialogRef<GameTypeStatisticsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { statistics: GameTypeStatistics[] }) {
    data.statistics.sort((a, b) => b.count - a.count);
  }

  close(): void {
    this.dialogRef.close();
  }
}
