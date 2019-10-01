import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MwHomeComponent } from './mw-home.component';
import { MwHomeRoutingModule } from './mw-home-routing.module';

@NgModule({
  declarations: [MwHomeComponent],
  imports: [
    CommonModule,
    MwHomeRoutingModule
  ]
})
export class MwHomeModule { }
