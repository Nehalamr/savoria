import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicBackground]'
})
export class DynamicBackgroundDirective implements OnChanges {

  @Input('appDynamicBackground') color = '';
  @Input() hoverColor = '';

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.setBackground(this.color);
  }

  @HostListener('mouseenter')
  onEnter() {
    if (this.hoverColor) {
      this.setBackground(this.hoverColor);
    }
  }

  @HostListener('mouseleave')
  onLeave() {
    this.setBackground(this.color);
  }

  private setBackground(value: string) {
    this.el.nativeElement.style.background = value;
  }
}