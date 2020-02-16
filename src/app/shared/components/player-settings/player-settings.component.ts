import {Component, Input} from '@angular/core';
import {PlaygroundModel} from '~models/playground.model';
import {PlaygroundState} from '~models/playground-state.model';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent {
  @Input() playground: PlaygroundModel<PlaygroundState>;
}
