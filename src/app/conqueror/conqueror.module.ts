import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ConquerorComponent} from './conqueror.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ConquerorComponent}
    ])
  ],
  declarations: [ConquerorComponent]
})
export class ConquerorModule {
}
