import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import {PortResolver} from '../modules/shared/resolvers/port.resolver';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    resolve: {
      ports: PortResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
