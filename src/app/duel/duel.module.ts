import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DuelComponent} from './duel.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: DuelComponent}
    ])
  ],
  declarations: [DuelComponent]
})
export class DuelModule {
}
