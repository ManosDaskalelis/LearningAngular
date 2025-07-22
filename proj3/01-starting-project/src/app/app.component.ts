import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentData } from './user-input/investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  results: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] = [];




  onCalculateInvestmentResults(data: InvestmentData) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: data.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }
    this.results = annualData;
    return this.results;
  }


}
