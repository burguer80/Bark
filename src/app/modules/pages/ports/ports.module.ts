import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {PipesModule} from '../../shared/pipes/pipes.module';
import {PortsPage} from './ports.page';
import {PortsPageRoutingModule} from './ports-routing.module';
import {PortResolver} from '../../shared/resolvers/port.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        PortsPageRoutingModule
    ],
    declarations: [PortsPage],
    providers: [PortResolver],
})
export class PortsPageModule {
}
