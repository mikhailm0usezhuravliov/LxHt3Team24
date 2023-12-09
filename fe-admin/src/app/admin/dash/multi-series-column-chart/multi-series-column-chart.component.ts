import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-series-column-chart',
  templateUrl: './multi-series-column-chart.component.html',
  styleUrls: ['./multi-series-column-chart.component.scss']
})
export class MultiSeriesColumnChartComponent {
	chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Подано заявок ветераном\\родичами"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		title: "ветеран"
	  },
	  axisY2: {
		title: "родичи"
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",
		name: "ветеран",
		legendText: "",
		showInLegend: true,
		dataPoints:[
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
		  {label: "Грудень", y: 204}
		]
	  }, {
		type: "column",
		name: "родичі",
		legendText: "",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
		  {label: "Січень", y: 115},
		  {label: "Лютий", y: 25},
		  {label: "Березень", y: 36},
		  {label: "Квітень", y: 42},
		  {label: "Травень", y: 26},
		  {label: "Червень", y: 27},
		  {label: "Липень", y: 31},
		  {label: "Серпень", y: 103},
		  {label: "Вересень", y: 13},
		  {label: "Листопад", y: 43},
		  {label: "Грудень", y: 43}
		]
	  }]
	}
}
