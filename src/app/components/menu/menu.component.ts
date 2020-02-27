import {Component} from '@angular/core';
import {Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'x01',
    data: {name: 'Classic X01', color: '#009688', icon: 'emoji_food_beverage'}
  },
  {
    path: 'cricket',
    data: {name: 'Ultimate Cricket', color: '#0a756b', icon: 'sports_cricket'}
  },
  {
    path: 'around-clock',
    data: {name: 'Around The Clock', color: '#0f5851', icon: 'cached'}
  },
  {
    path: 'shanghai',
    data: {name: 'Shanghai, Halve It', color: '#0f5851', icon: 'emoji_symbols'}
  },
  {
    path: 'fives',
    data: {name: 'Fives', color: '#009688', icon: 'add_box'}
  },
  {
    path: 'hare-and-hound',
    data: {name: 'Hare and Hound', color: '#0a756b', icon: 'accessible_forward'}
  },
  {
    path: 'knockout',
    data: {name: 'Knockout', color: '#009688', icon: 'sports_mma'}
  },
  {
    path: 'killer',
    data: {name: 'Killer', color: '#0a756b', icon: 'gps_fixed'}
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
