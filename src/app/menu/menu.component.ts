import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  currentMenuId: number;

  constructor(public routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard', []),
      new Menu(2, '股票', 'stock', [
        new Menu(2.1, '股票管理', 'manager', []),
        new Menu(2.2, 'A股票', 'aStock', [])
      ])
    ]

    this.menus.map((item) => {
      item.link = '/' + item.link;
      return item;
    })

    console.log(this.menus);

    let menu = this.menus.find((item) => {
      return item.link == window.location.pathname;
    }) || { id: 1 };

    this.currentMenuId = menu.id;
  }

  nav(menu) {
    this.currentMenuId = menu.id;
  }

}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string,
    public children: Array<Menu>
  ) {

  }
}
