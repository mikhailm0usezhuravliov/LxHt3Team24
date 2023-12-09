import { Component } from '@angular/core';

@Component({
  selector: 'app-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.scss'],
})
export class StackedColumnChartComponent {
  chart: any;

  chartOptions = {
    theme: 'light2',
    title: {
      text: 'Подано заявок ветераном\\родичами',
    },
    animationEnabled: true,
    toolTip: {
      shared: true,
    },
    legend: {
      horizontalAlign: 'right',
      verticalAlign: 'center',
      reversed: true,
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: 'stackedColumn',
        name: 'Ветеран',
        showInLegend: true,
        dataPoints: [
          {label: "Січень", y: 262},
          {label: "Лютий", y: 211},
          {label: "Березень", y: 175},
          {label: "Квітень", y: 137},
          {label: "Травень", y: 115},
          {label: "Червень", y: 104},
          {label: "Липень", y: 98},
          {label: "Серпень", y: 60},
          {label: "Вересень", y: 233},
          {label: "Листопад", y: 204},
          {label: "Грудень", y: 150}
        ],
      },
      {
        type: 'stackedColumn',
        name: 'Родичі',
        showInLegend: true,
        dataPoints: [
          {label: "Січень", y: 115},
          {label: "Лютий", y: 25},
          {label: "Березень", y: 36},
          {label: "Квітень", y: 42},
          {label: "Травень", y: 26},
          {label: "Червень", y: 27},
          {label: "Липень", y: 31},
          {label: "Серпень", y: 103},
          {label: "Вересень", y: 43},
          {label: "Листопад", y: 33},
          {label: "Грудень", y: 43}
        ],
      },
    ],
  };
}
