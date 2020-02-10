import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Player} from '../models/player.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [
    trigger('windowState', [
      state('inactive', style({opacity: 0, top: '30px', display: 'none',})),
      state('active', style({opacity: 1, top: '100px', display: 'box',})),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ]),
    trigger('backgroundState', [
      state('inactive', style({opacity: 0, display: 'none',})),
      state('active', style({opacity: 1, display: 'box',})),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class ModalComponent {
  state: string = 'inactive';
  message: string = '';
  extraMessage: string = '';
  players: Player[];

  show() {
    this.state = 'active';
  }

  hide() {
    this.state = 'inactive';
  }
}
