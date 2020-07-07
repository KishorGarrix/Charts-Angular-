import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartAppComponent } from './stock-chart-app.component';

describe('StockChartAppComponent', () => {
  let component: StockChartAppComponent;
  let fixture: ComponentFixture<StockChartAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChartAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
