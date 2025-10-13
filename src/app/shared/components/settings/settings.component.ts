import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Playground} from '~models/playground.model';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class SettingsComponent {
  @Input() playground: Playground<PlaygroundState>;

  constructor(private readonly dialogService: DialogService) {
  }

  openStatistics() {
    this.dialogService.openGameStatisticsDialog(this.playground.getGameStatistics());
  }

  openHistory() {
    this.dialogService.openGameHistory(this.playground.getGameHistory());
  }
}
