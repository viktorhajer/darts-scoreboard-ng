import {Routes} from '@angular/router';
import {MenuComponent} from './shared/components/menu/menu.component';
import {X01Module} from './x01/x01.module';
import {CricketModule} from './cricket/cricket.module';
import {AroundClockModule} from './aroundclock/around-clock.module';
import {ShanghaiModule} from './shanghai/shanghai.module';
import {KillerModule} from './killer/killer.module';
import {FivesModule} from './fives/fives.module';
import {HareAndHoundModule} from './hare-and-hound/hare-and-hound.module';
import {KnockoutModule} from './knockout/knockout.module';
import {CaptureTheFlagModule} from './capture-the-flag/capture-the-flag.module';
import {ImitatorModule} from './imitator/imitator.module';
import {ScamModule} from './scam/scam.module';
import {DuelModule} from './duel/duel.module';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'x01',
    loadChildren: () => X01Module
  },
  {
    path: 'cricket',
    loadChildren: () => CricketModule
  },
  {
    path: 'around-clock',
    loadChildren: () => AroundClockModule
  },
  {
    path: 'shanghai',
    loadChildren: () => ShanghaiModule
  },
  {
    path: 'fives',
    loadChildren: () => FivesModule
  },
  {
    path: 'hare-and-hound',
    loadChildren: () => HareAndHoundModule
  },
  {
    path: 'knockout',
    loadChildren: () => KnockoutModule
  },
  {
    path: 'killer',
    loadChildren: () => KillerModule
  },
  {
    path: 'capture-the-flag',
    loadChildren: () => CaptureTheFlagModule
  },
  {
    path: 'duel',
    loadChildren: () => DuelModule
  },
  {
    path: 'imitator',
    loadChildren: () => ImitatorModule
  },
  {
    path: 'scam',
    loadChildren: () => ScamModule
  },
  {
    path: '**', redirectTo: ''
  }
];
