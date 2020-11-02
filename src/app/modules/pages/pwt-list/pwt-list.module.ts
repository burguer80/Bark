import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {PwtComponent} from './pwt/pwt.component';
import {PwtListPageRoutingModule} from './pwt-list-routing.module';
import {PwtListPage} from './pwt-list.page';
import {PortResolver} from '../../shared/resolvers/port.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PwtListPageRoutingModule
    ],
    declarations: [PwtListPage, PwtComponent],
    providers: [PortResolver],
})
export class PwtListPageModule {
}
