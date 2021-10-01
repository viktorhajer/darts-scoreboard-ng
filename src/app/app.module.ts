import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), SharedModule
  ],
  declarations: [AppComponent],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
