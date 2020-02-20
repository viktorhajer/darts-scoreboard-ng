import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FivesComponent} from './fives.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: FivesComponent}
    ])
  ],
  declarations: [FivesComponent]
})
export class FivesModule {
}
