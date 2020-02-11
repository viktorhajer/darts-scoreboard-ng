import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './components/menu.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), SharedModule
  ],
  declarations: [AppComponent, MenuComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
