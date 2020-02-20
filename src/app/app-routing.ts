import {Routes} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {X01Module} from './x01/x01.module';
import {CricketModule} from './cricket/cricket.module';
import {AroundClockModule} from './aroundclock/around-clock.module';
import {ShanghaiModule} from './shanghai/shanghai.module';
import {KillerModule} from './killer/killer.module';
import {FivesModule} from './fives/fives.module';
import {HareAndHoundModule} from './hare-and-hound/hare-and-hound.module';

export const routes: Routes = [
  {path: '', component: MenuComponent},
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
    data: {name: 'Around The Clock'},
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
    path: 'killer',
    data: {name: 'Killer'},
    loadChildren: () => KillerModule
  },
  {
    path: '**', redirectTo: ''
  }
];
