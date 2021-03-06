import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Playground} from '~models/playground.model';
import {PlaygroundState} from '~models/playground-state.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
  @Input() playground: Playground<PlaygroundState>;
  @Input() title: string;
  @Input() rules: string;
}
