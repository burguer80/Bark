import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwtListPageRoutingModule } from './pwt-list-routing.module';

import { PwtListPage } from './pwt-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwtListPageRoutingModule
  ],
  declarations: [PwtListPage]
})
export class PwtListPageModule {}
