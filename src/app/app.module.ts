import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { StarsComponent } from './components/stars/stars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Url404Component } from './components/url404/url404.component';
import { StockComponent } from './stock/stock/stock.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { AStockComponent } from './stock/a-stock/a-stock.component';
import { StockFormComponent } from './stock/stock-manage/stock-form/stock-form.component';
import { StockService } from './services/stock.service';
import { StockFilterPipe } from './pipes/stock-filter.pipe';

// 配置路由
const routerConfig: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'stock',
    component: StockComponent,
    children: [
      {
        path: 'manager',
        component: StockManageComponent,
      },
      {
        path: 'manager/:type/:stockId',
        component: StockFormComponent,
      },
      {
        path: 'aStock',
        component: AStockComponent,
      }
    ]
  },
  {
    path: '**',
    component: Url404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    Url404Component,
    AStockComponent,
    StockComponent,
    StockFormComponent,
    StockFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
