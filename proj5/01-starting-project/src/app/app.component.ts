import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SupportTicketComponent } from "./dashboard/support-ticket/support-ticket.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NavbarComponent, ServerStatusComponent, TrafficComponent, SupportTicketComponent, DashboardItemComponent],
})
export class AppComponent {
}
