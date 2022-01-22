import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { PhotoService } from './../../photo/photo.service';
import { PhotoComment } from './../../photo/photo-comment';

import { Observable } from 'rxjs';



@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',

})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>

  constructor(
    private photService: PhotoService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {

    this.comments$ = this.photService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }
}
