import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { tick } from '@angular/core/testing';
import { count } from 'rxjs';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css'
})
export class SupportTicketComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string, text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: (Math.random() * 100).toFixed().toString(),
      status: 'open'
    }

    this.tickets.forEach(t => {
      if (t.id == ticket.id) {
        ticket.id = (Math.random() * 100).toFixed().toString().concat(ticket.id, (ticket.id + 1).toString() + "+");
      }
    })

    this.tickets.push(ticket)
    console.log(ticket);
  }

}
