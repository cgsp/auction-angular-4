import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-stock',
  templateUrl: './a-stock.component.html',
  styleUrls: ['./a-stock.component.less']
})
export class AStockComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  go() {
    // this.router.navigate(['/stock/manager']);
    // this.router.navigateByUrl('/stock/manager');
    this.router.navigate(['stock', 'manager']);
  }

}
