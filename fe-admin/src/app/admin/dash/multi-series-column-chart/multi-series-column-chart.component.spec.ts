import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeriesColumnChartComponent } from './multi-series-column-chart.component';

describe('MultiSeriesColumnChartComponent', () => {
  let component: MultiSeriesColumnChartComponent;
  let fixture: ComponentFixture<MultiSeriesColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeriesColumnChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSeriesColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
