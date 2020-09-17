import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortsPage } from './ports.page';
import {PortResolver} from '../../shared/resolvers/port.resolver';

const routes: Routes = [
  {
    path: '',
    component: PortsPage,
    resolve: {
      port: PortResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortsPageRoutingModule {}
