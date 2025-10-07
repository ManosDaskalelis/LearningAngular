import { Component, ViewEncapsulation } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NewTicketComponent {

}
