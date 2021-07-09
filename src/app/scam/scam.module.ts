import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ScamComponent} from './scam.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ScamComponent}
    ])
  ],
  declarations: [ScamComponent]
})
export class ScamModule {
}
