import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  getAllStocks(): Array<Stock> {
    let stocks = [
      new Stock(1, '第1个股票', 1, 1, 'gsp第1个股票', ['IT', '互联网']),
      new Stock(2, '第2个股票', 2, 2, 'gsp第2个股票', ['IT', '互联网']),
      new Stock(3, '第3个股票', 3, 3, 'gsp第3个股票', ['金融']),
      new Stock(4, '第4个股票', 4, 4.3, 'gsp第4个股票', ['IT', '互联网']),
      new Stock(5, '第5个股票', 5, 5.3, 'gsp第5个股票', ['IT', '互联网'])
    ]
    return stocks;
  }

  getOneStock(id) {
    let stock = this.getAllStocks().find(stock => stock.id === id);
    return stock;
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
