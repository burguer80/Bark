import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pwt-list',
    pathMatch: 'full'
  },
  {
    path: 'ports',
    loadChildren: () => import('./modules/pages/ports/ports.module').then( m => m.PortsPageModule)
  },
  {
    path: 'pwt-list',
    loadChildren: () => import('./modules/pages/pwt-list/pwt-list.module').then( m => m.PwtListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
