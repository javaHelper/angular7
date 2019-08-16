import { Directive, OnInit, ElementRef, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
   // this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
   // this.rederer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
   this.backgroundColor = this.defaultColor;
  }
}
