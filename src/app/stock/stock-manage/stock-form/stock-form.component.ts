import { StockService } from './../../../services/stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../services/stock.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.less']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  private stockForm: FormGroup;
  private fb: FormBuilder = new FormBuilder();
  private categories: string[] = ['IT', '金融', '互联网'];

  constructor(public router: Router, public routerInfo: ActivatedRoute, public stockService: StockService) {
  }

  ngOnInit() {
    let type = this.routerInfo.snapshot.params.type;
    let id = this.routerInfo.snapshot.params.id;

    if (type === 'add') {
      this.stock = new Stock(0, '', 0, 0, '', []);
    } else {
      this.stock = this.stockService.getOneStock(id - 0);
    }

    this.stockForm = this.fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(6)]],
      price: [this.stock.price, [Validators.required]],
      desc: [this.stock.desc, [Validators.required, Validators.minLength(6)]],
      categories: this.fb.array([
        [this.stock.categories.indexOf(this.categories[0]) > -1],
        [this.stock.categories.indexOf(this.categories[1]) > -1],
        [this.stock.categories.indexOf(this.categories[2]) > -1],
      ], this.categoriesValitor)
    })
  }

  categoriesValitor(cats: FormArray): any {
    let valid = false;
    cats.controls.forEach(item => {
      // console.log(item.value);
      if (item.value) {
        valid = true;
      }
    })
    return valid ? null : { cat: { decs: '请至少选择一个股票类型' } };
  }

  cancelOrSave(type) {
    this.stockForm.value.rating = this.stock.rating;
    let stockCategories = [];
    for (let index = 0; index < this.stockForm.value.categories.length; index++) {
      if (this.stockForm.value.categories[index]) {
        stockCategories.push(this.categories[index]);
      }
    }
    this.stockForm.value.categories = stockCategories;
    if (this.stockForm.valid) {
      console.log(this.stockForm.value);
      this.router.navigateByUrl('stock/manager');
    }
  }


}
