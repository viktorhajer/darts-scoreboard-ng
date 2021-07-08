import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ImitatorComponent} from './imitator.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ImitatorComponent}
    ])
  ],
  declarations: [ImitatorComponent]
})
export class ImitatorModule {
}
