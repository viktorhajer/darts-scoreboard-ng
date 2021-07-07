import {Component, Input} from '@angular/core';
import {Playground} from '~models/playground.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent {

  @Input() playground: Playground<PlaygroundState>;

  constructor(public route: Router, private dialogService: DialogService) {
  }

  quit() {
    this.route.navigate(['/']);
    this.playground.game.resetScore();
    this.playground.multiplier = 1;
    this.playground.extraEndingMsg = '';
  }

  showSettings() {
    this.playground.reset();
    this.playground.settingsOpen = true;
  }

  showTable() {
    const enabledFields: number[] = [];
    const primaryFields: number[] = [];
    for (let i = 0; i <= 20; i++) {
      if (this.playground.isFieldEnabled(i)){
        enabledFields.push(i);
      }
      if (this.playground.isPrimaryField(i)){
        primaryFields.push(i);
      }
    }
    this.dialogService.openDartsTable(enabledFields, primaryFields);
  }
}
