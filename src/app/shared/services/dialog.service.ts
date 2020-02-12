import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '~components/dialog/dialog.component';
import {Player} from '~models/player.model';

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
}
