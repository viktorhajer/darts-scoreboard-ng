import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CaptureTheFlagComponent} from './capture-the-flag.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CaptureTheFlagComponent}
    ])
  ],
  declarations: [CaptureTheFlagComponent]
})
export class CaptureTheFlagModule {
}
