import { UserService } from './../../../core/user/user.service';
import { element } from 'protractor';
import { Directive, Input, OnInit, ElementRef,  Renderer2 } from '@angular/core';


import { Photo } from './../../photo/photo';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class photoOwneronlyDirect implements OnInit {

  @Input() ownedPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser()
      .subscribe( user => {
        if(!user || user.id != this.ownedPhoto.userId){
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }
      })
  }
}
