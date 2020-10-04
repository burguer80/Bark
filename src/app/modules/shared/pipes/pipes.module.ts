import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortSearchPipe } from './port-search.pipe';



@NgModule({
  declarations: [PortSearchPipe],
  imports: [
    CommonModule
  ],
  exports: [PortSearchPipe]
})
export class PipesModule { }
