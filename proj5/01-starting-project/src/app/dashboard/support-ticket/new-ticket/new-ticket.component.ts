import { Component, ElementRef, viewChild, ViewChild} from '@angular/core';
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
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; 
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  // onSubmit(titleElement: HTMLInputElement) {
  //   console.log(titleElement.value);
  // }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    // this.form.nativeElement.reset(); ======> non signal
    this.form().nativeElement.reset();
  }

}
