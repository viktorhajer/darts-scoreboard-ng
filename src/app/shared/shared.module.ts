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
import {ConfirmDialogComponent} from '~components/confirm-dialog/confirm-dialog.component';
import {GameStatisticsDialogComponent} from '~components/game-statistics-dialog/game-statistics-dialog.component';
import {GameHistoryDialogComponent} from '~components/game-history-dialog/game-history-dialog.component';
import {GameTypeStatisticsDialogComponent} from '~components/game-type-statistics-dialog/game-type-statistics-dialog.component';
import {MenuComponent} from '~components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {NumberPlateVisualComponent} from '~components/number-plate-visual/number-plate-visual.component';

const components = [NumberPlateComponent, GameToolbarComponent, GameStatisticsDialogComponent,
  DialogComponent, PlayerSettingsComponent, SettingsComponent, PlayerScoreComponent, ConfirmDialogComponent, NumberPlateVisualComponent,
  GameHistoryDialogComponent, GameTypeStatisticsDialogComponent, MenuComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: components,
  exports: [CommonModule, FormsModule, MaterialModule, ...components],
  entryComponents: [DialogComponent, GameStatisticsDialogComponent,
    GameHistoryDialogComponent, GameTypeStatisticsDialogComponent]
})
export class SharedModule {
}
