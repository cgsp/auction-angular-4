import { Router } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { StockService, Stock } from '../../services/stock.service';
import { FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
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

  constructor(public router: Router, public stockService: StockService, public http: Http) {

  }

  ngOnInit() {
    const httpHeader: Headers = new Headers();
    httpHeader.append('Authorization', 'Basic 12345');
    this.http.get('/api/stock', {
      search: 'sex=1',
      params: 'age=18',
      body: {
        row: 1
      },
      withCredentials: true,
      responseType: null,
      headers: httpHeader
    })
      .map(response => response.json())
      .subscribe(data => this.stocks = data)

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
