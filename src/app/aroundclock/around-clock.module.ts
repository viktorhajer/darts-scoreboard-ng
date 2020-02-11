import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AroundClockComponent} from './around-clock.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AroundClockComponent}
    ])
  ],
  declarations: [AroundClockComponent]
})
export class AroundClockModule {
}
