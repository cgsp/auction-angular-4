import { Component, OnInit, Input, Output, Optional, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {
  @Input() rating: number;
  @Input() readonly: boolean = true;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];
  trueStarNum: number = 0;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i < this.rating);
      if (i < this.rating) {
        this.trueStarNum += 1;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i < this.rating);
      if (i < this.rating) {
        this.trueStarNum += 1;
      }
    }

  }

  starClick(i: number) {
    if (this.readonly) {
      return;
    }
    this.rating = i + 1;
    this.stars = [];
    if (this.trueStarNum === this.rating) {
      this.rating = 0;
      this.trueStarNum = 0
      this.stars = [false, false, false, false, false];
    } else {
      this.trueStarNum = this.rating;
      for (let i = 0; i < 5; i++) {
        this.stars.push(i < this.rating);
      }
    }
    this.ratingChange.emit(this.rating);
  }

}
