import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css'
})
export class SupportTicketComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: (Math.random() * 10).toFixed().toString(),
      status: 'open'
    }

    this.tickets.push(ticket)
    console.log(ticket);
    
  }
}
