import {NgModule} from '@angular/core';
import {EntityDataModule, EntityDataService} from '@ngrx/data';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';

import {entityConfig} from '../../entity-metadata';
import {environment} from '../../../environments/environment';
import {PortDataService} from './port/port-data.service';
import {PortEntityService} from './port/port-entity.service';
import {PwtDataService} from './pwt/pwt-data.service';
import {PwtEntityService} from './pwt/pwt-entity.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
    imports: [
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [
        PortDataService,
        PortEntityService,
        PwtDataService,
        PwtEntityService
    ],
})
export class EntityStoreModule {
    constructor(
        entityDataService: EntityDataService,
        portDataService: PortDataService,
        pwtDataService: PwtDataService,
    ) {
        entityDataService.registerServices({
            Port: portDataService,
            Pwt: pwtDataService
        });
    }
}
