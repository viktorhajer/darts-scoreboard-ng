import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {KnockoutComponent} from './knockout.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: KnockoutComponent}
    ])
  ],
  declarations: [KnockoutComponent]
})
export class KnockoutModule {
}
