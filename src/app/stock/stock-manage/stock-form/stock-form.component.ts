import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.less']
})
export class StockFormComponent implements OnInit {

  constructor(public router: Router, public routerInfo: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.routerInfo.snapshot.params)
  }



}
