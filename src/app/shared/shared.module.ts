import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {DialogComponent} from '~components/dialog/dialog.component';
import {GameToolbarComponent} from '~components/game-toolbar/game-toolbar.component';
import {NumberPlateComponent} from '~components/number-plate/number-plate.component';
import {PlayerSettingsComponent} from '~components/player-settings/player-settings.component';
import {SettingsComponent} from '~components/settings/settings.component';
import {PlayerScoreComponent} from '~components/player-score/player-score.component';
import {GameRulesComponent} from '~components/game-rules/game-rules.component';
import {DartsTableDialogComponent} from '~components/darts-table/darts-table-dialog.component';

const components = [NumberPlateComponent, GameToolbarComponent, GameRulesComponent, DartsTableDialogComponent,
  DialogComponent, PlayerSettingsComponent, SettingsComponent, PlayerScoreComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: components,
  exports: [CommonModule, FormsModule, MaterialModule, ...components],
  entryComponents: [DialogComponent, DartsTableDialogComponent]
})
export class SharedModule {
}
