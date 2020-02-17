import {Component, Input} from '@angular/core';
import {Playground} from '~models/playground.model';
import {PlaygroundState} from '~models/playground-state.model';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.scss']
})
export class PlayerSettingsComponent {
  @Input() playground: Playground<PlaygroundState>;
  storedPlayers = [];

  constructor(private application: ApplicationStateService) {
    this.storedPlayers = this.application.getStoredPlayers();
  }

  getOptions() {
    return this.storedPlayers.filter(o => this.playground.game.players
      .map(p => p.name).indexOf(o) === -1);
  }
}
