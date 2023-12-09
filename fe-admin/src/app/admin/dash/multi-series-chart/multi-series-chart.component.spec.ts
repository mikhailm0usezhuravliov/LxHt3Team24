import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeriesChartComponent } from './multi-series-chart.component';

describe('MultiSeriesChartComponent', () => {
  let component: MultiSeriesChartComponent;
  let fixture: ComponentFixture<MultiSeriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeriesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSeriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
