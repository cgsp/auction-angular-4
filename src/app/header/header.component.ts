import { WebsocketService } from './../services/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  count: number = 0;

  constructor(public wsService: WebsocketService) { }

  ngOnInit() {
    this.wsService.connect('ws://localhost:8081')
      .subscribe(data => {
        this.count = JSON.parse(data).messageCount;
      })
  }

  send(mes) {
    this.wsService.send(mes);
  }

}
