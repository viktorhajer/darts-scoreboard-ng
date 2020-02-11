import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ShanghaiComponent} from './shanghai.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ShanghaiComponent}
    ])
  ],
  declarations: [ShanghaiComponent]
})
export class ShanghaiModule {
}
