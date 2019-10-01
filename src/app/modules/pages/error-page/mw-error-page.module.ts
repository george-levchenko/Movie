import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MwErrorPageRoutingModule } from './mw-error-page-routing.module';
import { MwErrorPageComponent } from './mw-error-page.component';
import { MwSharedModule } from '../../mw-shared.module';

@NgModule({
  declarations: [MwErrorPageComponent],
  imports: [
    CommonModule,
    MwErrorPageRoutingModule,
    MwSharedModule
  ]
})
export class MwErrorPageModule { }
