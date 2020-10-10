import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortResolver} from '../../shared/resolvers/port.resolver';
import {PwtListPage} from './pwt-list.page';

const routes: Routes = [
    {
        path: '',
        component: PwtListPage,
        resolve: {
            port: PortResolver,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PwtListPageRoutingModule {
}
