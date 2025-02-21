import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../model/products.model';
import { CustomDatePipe } from '../../pipe/custom-date.pipe';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomDatePipe, BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  _productsService = inject(ProductsService);

  getLowStockProducts(): Product[] {
    return this._productsService.products.filter((e) => e.countity < 10);
  }

  getExpiringSoonProducts(): Product[] {
    const today = new Date();
    const tenDaysLater = new Date();
    tenDaysLater.setDate(today.getDate() + 10);

    const aftertenDays = +this._getFormattedDate(tenDaysLater);

    return this._productsService.products.filter(
      (e) => e.expDate < aftertenDays
    );
  }

  private _getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
  }

  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Ingredients Count',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: 'Products' },
      },
      y: {
        title: { display: true, text: 'Ingredient Count' },
        beginAtZero: true,
      },
    },
  };

  ngOnInit(): void {
    const topProducts = this._productsService.products
      .sort((a, b) => b.countity - a.countity)
      .slice(0, 10);

    this.chartData.labels = topProducts.map((product) => product.name);
    this.chartData.datasets[0].data = topProducts.map(
      (product) => product.countity
    );
  }
}
