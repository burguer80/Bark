import {NgModule} from '@angular/core';
import {EntityDataModule, EntityDataService} from '@ngrx/data';
import {PortDataService} from './port/port-data.service';
import {PortEntityService} from './port/port-entity.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {entityConfig} from '../../entity-metadata';


@NgModule({
    imports: [
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [
        PortDataService,
        PortEntityService,
    ],
})
export class EntityStoreModule {
    constructor(
        entityDataService: EntityDataService,
        portDataService: PortDataService,
    ) {
        entityDataService.registerServices({Port: portDataService});
    }
}
