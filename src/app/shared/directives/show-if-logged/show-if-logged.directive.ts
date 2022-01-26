import { UserService } from './../../../core/user/user.service';
import { element } from 'protractor';
import { Directive, Input, OnInit, ElementRef,  Renderer2 } from '@angular/core';


@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {


  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit() {
    !this.userService.isLogged() && this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
  }
}

