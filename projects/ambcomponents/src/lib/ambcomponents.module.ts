import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmbcomponentsComponent } from './ambcomponents.component';
import { MaterialModule } from './material.module';
@NgModule({
  imports: [BrowserAnimationsModule, MaterialModule],
  declarations: [AmbcomponentsComponent],
  exports: [AmbcomponentsComponent]
})
export class AmbcomponentsModule {}
