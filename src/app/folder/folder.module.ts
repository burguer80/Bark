import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './folder-routing.module';

import {FolderPage} from './folder.page';
import {PortResolver} from '../modules/shared/resolvers/port.resolver';
import {PwtResolver} from '../modules/shared/resolvers/pwt.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
    ],
    declarations: [FolderPage],
    providers: [PortResolver, PwtResolver]
})
export class FolderPageModule {
}
