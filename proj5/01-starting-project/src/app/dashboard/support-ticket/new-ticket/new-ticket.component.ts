import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; 
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string; }>();


  // onSubmit(titleElement: HTMLInputElement) {
  //   console.log(titleElement.value);
  // }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText })
    this.form().nativeElement.reset(); 
    // this.form.nativeElement.reset(); ======> non signal
  }

  ngAfterViewInit() {
    console.log("after view init");
    console.log(this.form().nativeElement);


  }

  ngOnInit() {
    console.log("on init");
    // console.log(this.form?.nativeElement); ==> not visible yet 
    console.log(this.form().nativeElement); //==> ok

  }
}