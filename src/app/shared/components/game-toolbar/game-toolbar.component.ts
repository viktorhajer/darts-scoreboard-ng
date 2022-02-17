import {Component, Input} from '@angular/core';
import {Playground} from '~models/playground.model';
import {Router} from '@angular/router';
import {PlaygroundState} from '~models/playground-state.model';
import {DialogService} from '~services/dialog.service';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent {

  @Input() playground: Playground<PlaygroundState>;
  @Input() reversRound: number;
  @Input() info: number;

  constructor(public route: Router,
              public application: ApplicationStateService,
              private dialogService: DialogService) {
  }

  quit() {
    this.showConfirmation('Are you sure you want to navigate away from this page?', () => {
      this.route.navigate(['/']);
      this.playground.game.resetScore();
      this.playground.multiplier = 1;
      this.playground.extraEndingMsg = '';
    });
  }

  newGame() {
    this.showConfirmation('Are you sure you want to start a new game?', () => {
      this.playground.newGame(true);
    });
  }

  showSettings() {
    this.showConfirmation('Are you sure you want to navigate to the settings page?', () => {
      this.playground.reset();
      this.playground.settingsOpen = true;
    });
  }

  undo() {
    this.playground.undo();
  }

  getInfo(): number {
    return this.info || this.info === 0 ? this.info : this.getRound();
  }

  private showConfirmation(content: string, callback: () => void) {
    if (this.playground.gameHistory.length) {
      this.dialogService.openConfirmDialog('Confirmation', content)
        .afterClosed().subscribe(data => {
        if (data) {
          callback();
        }
      });
    } else {
      callback();
    }
  }

  private getRound(): number {
    const round = this.playground.game.round;
    return this.reversRound ? (this.reversRound - round) : (round + 1);
  }
}
