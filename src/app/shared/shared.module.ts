import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {DialogComponent} from '~components/dialog/dialog.component';
import {GameToolbarComponent} from '~components/game-toolbar/game-toolbar.component';
import {NumberPlateComponent} from '~components/number-plate/number-plate.component';
import { PlayerSettingsComponent } from '~components/player-settings/player-settings.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NumberPlateComponent, GameToolbarComponent, DialogComponent, PlayerSettingsComponent],
  exports: [CommonModule, FormsModule, MaterialModule, NumberPlateComponent, GameToolbarComponent, DialogComponent, PlayerSettingsComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {
}
