import {Component} from '@angular/core';
import {Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'x01',
    data: {name: 'Classic X01'}
  },
  {
    path: 'cricket',
    data: {name: 'Ultimate Cricket'}
  },
  {
    path: 'around-clock',
    data: {name: 'Around The Clock'}
  },
  {
    path: 'shanghai',
    data: {name: 'Shanghai / Halve It'}
  },
  {
    path: 'fives',
    data: {name: 'Fives'}
  },
  // {
  //   path: 'hare-and-hound',
  //   data: {name: 'Hare and Hound'}
  // },
  {
    path: 'killer',
    data: {name: 'Killer'}
  }
];


@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  getGameList(): Routes {
    return routes.filter(r => !!r.data);
  }
}
