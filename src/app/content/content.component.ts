import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  pageTitle: string;
  pageSubTitle: string;

  constructor(public router: Router) {

  }

  ngOnInit() {
    this.router.events
      .filter((event) => {
        return event instanceof NavigationEnd;
      })
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/dashboard' || event.url === '/') {
          this.pageTitle = '首页';
          this.pageSubTitle = '';
        } else if (event.url === '/stock/manager') {
          this.pageTitle = '股票管理';
          this.pageSubTitle = '股票信息的增删改查';
        } else if (event.url === '/stock/aStock') {
          this.pageTitle = 'A股票';
          this.pageSubTitle = '';
        } else {
          this.pageTitle = '404页面';
          this.pageSubTitle = '';
        }
      })
  }

}
