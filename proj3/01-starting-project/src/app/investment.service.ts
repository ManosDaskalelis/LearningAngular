import { Injectable, signal } from "@angular/core";
import { InvestmentData } from "./user-input/investment-input.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {
    results = signal<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
    }[] | undefined>(undefined);




    calculateInvestmentResults(data: InvestmentData) {
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
        this.results.set(annualData);
    }
}