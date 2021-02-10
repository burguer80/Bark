import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PwtListPage} from './pwt-list.page';

const routes: Routes = [
    {
        path: '',
        component: PwtListPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PwtListPageRoutingModule {
}
