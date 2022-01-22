import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';


@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule ,
      RouterModule,
      PhotoModule
    ]
})
export class PhotoFormModule { }
