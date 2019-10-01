import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./modules/pages/home/mw-home.module').then(mod => mod.MwHomeModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', loadChildren: () => import('./modules/pages/error-page/mw-error-page.module').then(mod => mod.MwErrorPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
