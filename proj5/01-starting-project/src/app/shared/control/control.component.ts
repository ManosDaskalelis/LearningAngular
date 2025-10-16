import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})

export class ControlComponent implements AfterContentInit{
  
  // @HostBinding('class') className = 'control';
  // @HostListener('click')  onClick() {
  // alert(`You clicked on ${this.labelText}`);
  //}
  labelText = input.required<string>();
  private element = inject(ElementRef)
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  onClick() {
    // alert(`You clicked on ${this.labelText}`);
    console.log(this.element);
    console.log(this.control());
    
  }

  ngAfterContentInit(){
    console.log();
    // guarantee to get hold of the value 
  }
}
