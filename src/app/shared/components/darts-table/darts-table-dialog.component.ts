import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  templateUrl: 'darts-table-dialog.component.html',
  styleUrls: ['darts-table-dialog.component.scss']
})
export class DartsTableDialogComponent {

  constructor(protected dialogRef: MatDialogRef<DartsTableDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { fieldIndexes: [] }) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
