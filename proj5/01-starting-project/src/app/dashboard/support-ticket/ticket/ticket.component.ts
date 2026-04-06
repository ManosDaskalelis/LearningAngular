import { Component, input, Input, Output, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // @Input({ required: true }) ticket!: Ticket;
  // @Output('CloseTicket')
  // data = input<Ticket>(null,{});
  // data = input.required<Ticket>({alias: "ticketData"});  not recommended to use alias
  // data = input.required<Ticket>({transform: (value) => });  //not recommended to use alias
  // close = output({});
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);


  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible()); 
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
