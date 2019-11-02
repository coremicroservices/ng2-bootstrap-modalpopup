import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';
import { CommonModule } from '@angular/common';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent,
    ModalPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    ModalPopUpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
