import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NumberPlateComponent} from './components/number-plate.component';
import {GameToolbarComponent} from './components/game-toolbar.component';
import {ModalComponent} from './components/modal.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NumberPlateComponent, GameToolbarComponent, ModalComponent],
  exports: [CommonModule, FormsModule, MaterialModule, NumberPlateComponent, GameToolbarComponent, ModalComponent]
})
export class SharedModule {
}
