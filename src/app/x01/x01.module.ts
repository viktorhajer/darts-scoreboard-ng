import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {X01Component} from './x01.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: X01Component}
    ])
  ],
  declarations: [X01Component]
})
export class X01Module {
}
