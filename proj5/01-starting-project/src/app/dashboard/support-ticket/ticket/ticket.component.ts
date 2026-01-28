import { Component } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
    
  }
}
