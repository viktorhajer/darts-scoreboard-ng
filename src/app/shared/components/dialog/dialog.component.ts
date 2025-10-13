import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {Player} from '~models/player.model';

@Component({
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    standalone: false
})
export class DialogComponent {
  constructor(protected dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { title: string, content: string, players: Player[] }) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
