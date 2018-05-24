import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], name: any, key: any): any {
    if (!name || !key) {
      return list;
    }

    return list.filter(item => {
      return item[name].toLowerCase().indexOf(key.toLowerCase()) > 0;
    })

  }

}
