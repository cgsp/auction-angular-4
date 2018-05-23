import { StockService } from './../../../services/stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../services/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.less']
})
export class StockFormComponent implements OnInit {
  stock: Stock;

  constructor(public router: Router, public routerInfo: ActivatedRoute, public stockService: StockService) { }

  ngOnInit() {
    let type = this.routerInfo.snapshot.params.type;
    let id = this.routerInfo.snapshot.params.id;

    if (type === 'add') {
      this.stock = new Stock(0, '', 0, 0, '', []);
    } else {
      this.stock = this.stockService.getOneStock(id - 0);
    }
  }

  cancelOrSave(type) {
    this.router.navigateByUrl('stock/manager');
  }



}
