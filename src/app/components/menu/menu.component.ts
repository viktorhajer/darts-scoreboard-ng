import {Component} from '@angular/core';
import {Router, Routes} from '@angular/router';

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
    data: {name: 'Hare and Hound', color: '#0a756b', icon: 'cruelty_free'}
  },
  {
    path: 'knockout',
    data: {name: 'Knockout', color: '#009688', icon: 'sports_mma'}
  },
  {
    path: 'killer',
    data: {name: 'Killer', color: '#0a756b', icon: 'gps_fixed'}
  },
  {
    path: 'conqueror',
    data: {name: 'Capture the Flag', color: '#0a756b', icon: 'flag'}
  },
  {
    path: 'duel',
    data: {name: 'Duel', color: '#0a756b', icon: 'emoji_events'}
  },
  {
    path: 'imitator',
    data: {name: 'Imitator', color: '#0a756b', icon: 'group'}
  },
  {
    path: 'scam',
    data: {name: 'Scam', color: '#0a756b', icon: 'group_work'}
  }
];

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private readonly router: Router) {
  }

  randomGame() {
    const random = Math.floor(Math.random() * routes.length);
    this.router.navigate(['/' + routes[random].path]);
  }

  getGameList(): Routes {
    return routes.filter(r => !!r.data);
  }
}
