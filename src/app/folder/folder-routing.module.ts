import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import {PortResolver} from '../modules/shared/resolvers/port.resolver';
import {PwtResolver} from '../modules/shared/resolvers/pwt.resolver';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    resolve: {
      port: PortResolver,
      pwt: PwtResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
