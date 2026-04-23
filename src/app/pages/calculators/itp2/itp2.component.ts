import {Component} from '@angular/core';

interface YearConfig {
  year: number;
  inkomstbasbelopp: number;
}

@Component({
  selector: 'app-itp2',
  templateUrl: './itp2.component.html',
  styleUrls: ['./itp2.component.scss']
})
export class Itp2Component {
  years: YearConfig[] = [
    {year: 2026, inkomstbasbelopp: 83400},
    {year: 2025, inkomstbasbelopp: 80600},
    {year: 2024, inkomstbasbelopp: 76200},
    {year: 2023, inkomstbasbelopp: 74300},
    {year: 2022, inkomstbasbelopp: 71000},
  ];

  selectedYear: YearConfig = this.years[0];
  monthlySalary: number = null;

  compareYears(a: YearConfig, b: YearConfig): boolean {
    return a && b && a.year === b.year;
  }

  get threshold(): number {
    return (7.5 * this.selectedYear.inkomstbasbelopp) / 12;
  }

  get maxCap(): number {
    return (30 * this.selectedYear.inkomstbasbelopp) / 12;
  }

  get lowerPartContribution(): number {
    if (!this.monthlySalary || this.monthlySalary <= 0) return 0;
    return Math.min(this.monthlySalary, this.threshold) * 0.045;
  }

  get upperPartContribution(): number {
    if (!this.monthlySalary || this.monthlySalary <= this.threshold) return 0;
    const taxablePart = Math.min(this.monthlySalary, this.maxCap) - this.threshold;
    return taxablePart * 0.30;
  }

  get totalMonthly(): number {
    return this.lowerPartContribution + this.upperPartContribution;
  }

  get totalAnnual(): number {
    return this.totalMonthly * 12;
  }

  get hasResult(): boolean {
    return this.monthlySalary != null && this.monthlySalary > 0;
  }
}
