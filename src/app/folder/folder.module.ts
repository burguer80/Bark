import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {EntityStoreModule} from '../modules/store/entity-store.module';
import {PortResolver} from '../modules/shared/resolvers/port.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    EntityStoreModule
  ],
  declarations: [FolderPage],
  providers: [PortResolver]
})
export class FolderPageModule {}
