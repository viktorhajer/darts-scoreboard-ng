import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {DialogComponent} from '~components/dialog/dialog.component';
import {GameToolbarComponent} from '~components/game-toolbar/game-toolbar.component';
import {NumberPlateComponent} from '~components/number-plate/number-plate.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NumberPlateComponent, GameToolbarComponent, DialogComponent],
  exports: [CommonModule, FormsModule, MaterialModule, NumberPlateComponent, GameToolbarComponent, DialogComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {
}
