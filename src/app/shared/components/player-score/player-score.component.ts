import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Player} from '~models/player.model';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
    selector: 'app-player-score',
    templateUrl: './player-score.component.html',
    styleUrls: ['./player-score.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class PlayerScoreComponent {
  @Input() player: Player;
  @Input() hasContent = true;
  @Input() scoreDisplayed = true;
  @Input() lifeDisplayed = false;
  @Input() highlighted = false;

  constructor(public readonly application: ApplicationStateService) {
  }
}
