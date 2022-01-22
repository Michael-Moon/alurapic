import { CommonModule } from '@angular/common';
import { ImmediateClickdirective } from './immediate-click.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ImmediateClickdirective],
  exports: [ImmediateClickdirective],
  imports: [
    CommonModule
  ]
})
export class ImmediateClickModule {

}
