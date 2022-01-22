import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
],
exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent],
imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
]
})
export class PhotoDetailsModule {
  constructor () {}
}
