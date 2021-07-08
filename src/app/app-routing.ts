import {Routes} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {X01Module} from './x01/x01.module';
import {CricketModule} from './cricket/cricket.module';
import {AroundClockModule} from './aroundclock/around-clock.module';
import {ShanghaiModule} from './shanghai/shanghai.module';
import {KillerModule} from './killer/killer.module';
import {FivesModule} from './fives/fives.module';
import {HareAndHoundModule} from './hare-and-hound/hare-and-hound.module';
import {KnockoutModule} from './knockout/knockout.module';
import {ConquerorModule} from './conqueror/conqueror.module';
import {ImitatorModule} from './imitator/imitator.module';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'x01',
    data: {name: 'Classic X01'},
    loadChildren: () => X01Module
  },
  {
    path: 'cricket',
    data: {name: 'Ultimate Cricket'},
    loadChildren: () => CricketModule
  },
  {
    path: 'around-clock',
    data: {name: 'Around The Clock / Nine Lives'},
    loadChildren: () => AroundClockModule
  },
  {
    path: 'shanghai',
    data: {name: 'Shanghai / Halve It'},
    loadChildren: () => ShanghaiModule
  },
  {
    path: 'fives',
    data: {name: 'Fives'},
    loadChildren: () => FivesModule
  },
  {
    path: 'hare-and-hound',
    data: {name: 'Hare and Hound'},
    loadChildren: () => HareAndHoundModule
  },
  {
    path: 'knockout',
    data: {name: 'Knockout'},
    loadChildren: () => KnockoutModule
  },
  {
    path: 'killer',
    data: {name: 'Killer'},
    loadChildren: () => KillerModule
  },
  {
    path: 'conqueror',
    data: {name: 'Conqueror'},
    loadChildren: () => ConquerorModule
  },
  {
    path: 'imitator',
    data: {name: 'Imitator'},
    loadChildren: () => ImitatorModule
  },
  {
    path: '**', redirectTo: ''
  }
];
