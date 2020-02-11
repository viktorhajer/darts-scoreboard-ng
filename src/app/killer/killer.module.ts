import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {KillerComponent} from './killer.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: KillerComponent}
    ])
  ],
  declarations: [KillerComponent]
})
export class KillerModule {
}
