import {Component, Input} from '@angular/core';
import {Playground} from '../../models/playground.model';
import {PlaygroundState} from '../../models/playground-state.model';
import {ApplicationStateService} from '../../services/application-state.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
    selector: 'app-player-settings',
    templateUrl: './player-settings.component.html',
    styleUrls: ['./player-settings.component.scss'],
    standalone: false
})
export class PlayerSettingsComponent {
  //@ts-ignore
  @Input() playground: Playground<PlaygroundState>;
  storedPlayers: string[] = [];

  constructor(private application: ApplicationStateService) {
    this.storedPlayers = this.application.getStoredPlayers();
  }

  getOptions() {
    return this.storedPlayers.filter(o => this.playground.game.players
      .map(p => p.name).indexOf(o) === -1);
  }

  addPlayer(playerNameInput: any) {
    this.playground.addPlayer(playerNameInput);
    this.storedPlayers = this.application.getStoredPlayers();
  }

  playerSelected(event: MatAutocompleteSelectedEvent, playerNameInput: HTMLInputElement) {
    this.playground.addPlayer(event.option);
    this.storedPlayers = this.application.getStoredPlayers();
    playerNameInput.value = '';
    playerNameInput.blur();
  }
}
