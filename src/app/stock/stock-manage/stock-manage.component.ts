import { Router } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { StockService, Stock } from '../../services/stock.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.less']
})
export class StockManageComponent implements OnInit {

  private stocks: Stock[];
  searchInput: FormControl = new FormControl();
  key: string;

  constructor(public router: Router, public stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getAllStocks();

    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.key = value;
        // console.log(this.key);
      })
  }

  addOrUpdata(type, stock: Stock) {
    if (type === 'add') {
      this.router.navigate(['stock', 'manager', type, '']);
    } else {
      this.router.navigate(['stock', 'manager', type, stock.id, stock], { skipLocationChange: true });
    }

  }

}
