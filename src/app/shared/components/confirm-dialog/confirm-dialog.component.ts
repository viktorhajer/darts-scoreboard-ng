import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
    templateUrl: 'confirm-dialog.component.html',
    styleUrls: ['confirm-dialog.component.scss'],
    standalone: false
})
export class ConfirmDialogComponent {
  constructor(protected dialogRef: MatDialogRef<ConfirmDialogComponent>,
              public application: ApplicationStateService,
              @Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }) {
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
