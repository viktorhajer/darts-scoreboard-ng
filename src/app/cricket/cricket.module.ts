import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CricketComponent} from './cricket.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CricketComponent}
    ])
  ],
  declarations: [CricketComponent]
})
export class CricketModule {
}
