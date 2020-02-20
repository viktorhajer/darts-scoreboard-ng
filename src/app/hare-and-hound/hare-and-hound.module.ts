import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HareAndHoundComponent} from './hare-and-hound.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: HareAndHoundComponent}
    ])
  ],
  declarations: [HareAndHoundComponent]
})
export class HareAndHoundModule {
}
