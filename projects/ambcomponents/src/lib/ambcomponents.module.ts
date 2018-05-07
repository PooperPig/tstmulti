import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AmbButtonComponent } from './amb-button/amb-button.component';
//import { AmbcomponentsComponent } from './ambcomponents.component';
@NgModule({
  imports: [BrowserAnimationsModule, MaterialModule],
  declarations: [AmbButtonComponent],
  exports: [AmbButtonComponent]
})
export class AmbcomponentsModule {}
