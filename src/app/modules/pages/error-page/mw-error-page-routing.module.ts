import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MwErrorPageComponent } from './mw-error-page.component';

const routes: Routes = [
  {path: '', component: MwErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwErrorPageRoutingModule { }
