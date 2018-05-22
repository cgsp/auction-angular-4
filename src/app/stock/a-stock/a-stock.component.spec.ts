import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AStockComponent } from './a-stock.component';

describe('AStockComponent', () => {
  let component: AStockComponent;
  let fixture: ComponentFixture<AStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
