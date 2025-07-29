import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css'
})
export class SupportTicketComponent {

}
