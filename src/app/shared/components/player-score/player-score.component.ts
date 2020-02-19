import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Player} from '~models/player.model';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerScoreComponent {
  @Input() player: Player;
  @Input() hasContent = true;
  @Input() scoreDisplayed = true;
  @Input() highlighted = false;
}
