import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MwSharedModule } from './modules/mw-shared.module';
import { MwTranslateModule } from './modules/common/translate/mw-translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MwSharedModule,
    MwTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
