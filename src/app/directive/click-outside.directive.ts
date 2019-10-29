import { Directive, ElementRef, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) { }
  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    console.log('targetElement :', targetElement);
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    console.log('clickedInside :', clickedInside);
    if (!clickedInside) {
      this.clickOutside.emit(true);
    } else {
      this.clickOutside.emit(false);
    }
  }

}
