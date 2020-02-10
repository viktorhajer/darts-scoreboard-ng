import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlaygroundContainer} from './components/playground.container';
import {X01Playground} from './games/x01.playground';
import {CricketPlayground} from './games/cricket.playground';
import {ShanghaiPlayground} from './games/shanghai.playground';
import {AroundClockPlayground} from './games/aroundclock.playground';
import {KillerPlayground} from './games/killer.playground';
import {ChaseDragonPlayground} from './games/chaseDragon.playground';
import {PlaygroundDirective} from './components/playground.directive';
import {ModalComponent} from './components/modal.component';
import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './components/menu.component';
import {NumberPlateComponent} from './components/number-plate.component';
import {GameToolbarComponent} from './components/game-toolbar.component';

const entries = [X01Playground, CricketPlayground, ShanghaiPlayground, AroundClockPlayground,
  KillerPlayground, ChaseDragonPlayground];

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AppRoutingModule, MaterialModule
  ],
  declarations: [AppComponent, MenuComponent, NumberPlateComponent, GameToolbarComponent, PlaygroundDirective,
    ModalComponent, PlaygroundContainer, ...entries],
  providers: [],
  entryComponents: [...entries],
  bootstrap: [AppComponent]
})
export class AppModule {
}
