import { PlatformDetectorService } from './../../core/plataform-detector/platform-detector.service';
import { element } from 'protractor';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickdirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platFormDetector.isPlatformBrowser &&
    this.element.nativeElement.click();
  }

}
