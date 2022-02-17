import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '~components/dialog/dialog.component';
import {Player} from '~models/player.model';
import {ConfirmDialogComponent} from '~components/confirm-dialog/confirm-dialog.component';
import {PlayerStatistics} from '~models/player-statistics.model';
import {GameStatisticsDialogComponent} from '~components/game-statistics-dialog/game-statistics-dialog.component';
import {GameHistoryDialogComponent} from '~components/game-history-dialog/game-history-dialog.component';
import {GameStatistics} from '~models/game-statistics.model';
import {GameTypeStatistics} from '~models/game-type-statistics.model';
import {GameTypeStatisticsDialogComponent} from '~components/game-type-statistics-dialog/game-type-statistics-dialog.component';

@Injectable({providedIn: 'root'})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(title = '', content = '', players: Player[] = []): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      panelClass: 'success-dialog',
      data: {title, content, players},
    });
  }

  openGameStatisticsDialog(statistics: PlayerStatistics[]) {
    return this.dialog.open(GameStatisticsDialogComponent, {
      data: {statistics},
    });
  }

  openGameHistory(statistics: GameStatistics[]) {
    return this.dialog.open(GameHistoryDialogComponent, {
      data: {statistics},
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }

  openGameTypeStatistics(statistics: GameTypeStatistics[]) {
    return this.dialog.open(GameTypeStatisticsDialogComponent, {
      data: {statistics},
    });
  }

  openErrorDialog(title = '', content = ''): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      panelClass: 'error-dialog',
      data: {title, content, players: []},
    });
  }

  openConfirmDialog(title = '', content = ''): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      data: {title, content, players: []},
    });
  }
}
