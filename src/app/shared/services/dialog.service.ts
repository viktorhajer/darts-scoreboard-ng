import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '~components/dialog/dialog.component';
import {Player} from '~models/player.model';
import {DartsTableDialogComponent} from '~components/darts-table/darts-table-dialog.component';
import {ConfirmDialogComponent} from '~components/confirm-dialog/confirm-dialog.component';

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

  openDartsTable(fieldIndexes: number[], primaryFieldIndexes: number[], secondaryFields: number[]) {
    return this.dialog.open(DartsTableDialogComponent, {
      data: {field: fieldIndexes, primary: primaryFieldIndexes, secondary: secondaryFields}
    });
  }
}
