import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeave($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: "appSafeLink"});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
  
  constructor() {
    console.log('safe link directive is active');
  }

  onConfirmLeave(event: MouseEvent) {
    const possitiveAnswer = window.confirm('Do you want to leave the app');

    if (possitiveAnswer) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
      return;
    }

    event?.preventDefault();
  }
}
