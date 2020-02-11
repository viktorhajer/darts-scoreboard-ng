import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChaseDragonComponent} from './chase-dragon.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ChaseDragonComponent}
    ])
  ],
  declarations: [ChaseDragonComponent]
})
export class ChaseDragonModule {
}
