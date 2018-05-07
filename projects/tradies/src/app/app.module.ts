import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmbcomponentsModule } from 'ambcomponents';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmbcomponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
