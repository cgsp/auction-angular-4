import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketService {

  ws: WebSocket;
  constructor() { }

  connect(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    )
  }

  send(mes: string): void {
    this.ws.send(mes);
  }

}


