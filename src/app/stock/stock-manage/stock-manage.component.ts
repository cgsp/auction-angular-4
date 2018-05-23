import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../../services/stock.service';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.less']
})
export class StockManageComponent implements OnInit {

  private stocks: Stock[];

  constructor(public router: Router, public stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getAllStocks();
  }

  addOrUpdata(type, stock: Stock) {
    if (type === 'add') {
      this.router.navigate(['stock', 'manager', type, '']);
    } else {
      this.router.navigate(['stock', 'manager', type, stock.id, stock], { skipLocationChange: true });
    }

  }

}
