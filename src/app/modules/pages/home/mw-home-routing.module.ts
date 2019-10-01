import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MwHomeComponent } from './mw-home.component';

const routes: Routes = [
  {path: '', component: MwHomeComponent}
  // {
  //   path: '',
  //   component: MwHomeComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'galleries'},
  //     {
  //       path: 'galleries',
  //       pathMatch: 'full',
  //       loadChildren: () => import('./modules/gallery-list/ag-gallery-list.module').then(mod => mod.AgGalleryListModule),
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwHomeRoutingModule { }
