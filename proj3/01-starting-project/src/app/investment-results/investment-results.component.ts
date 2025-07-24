import { Component, computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.results();
  // }

  // results = computed(() => this.investmentService.results());

  results = this.investmentService.results.asReadonly();
}
