import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-series-chart',
  templateUrl: './multi-series-chart.component.html',
  styleUrls: ['./multi-series-chart.component.scss']
})
export class MultiSeriesChartComponent implements OnInit {

  ngOnInit(): void {
    this.range.valueChanges.subscribe(value => {
      this.chartOptions.title.text = `Подано\\виконано за вказаний період`
      this.chartOptions = {...this.chartOptions};
    })
  }
  chart: any;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  filter: number;

	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: `Подано\\виконано за 14 днів`
	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Подано звернень"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Подано",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2023, 11, 1), y: 63 },
			{ x: new Date(2023, 11, 2), y: 69 },
			{ x: new Date(2023, 11, 3), y: 65 },
			{ x: new Date(2023, 11, 4), y: 70 },
			{ x: new Date(2023, 11, 5), y: 71 },
			{ x: new Date(2023, 11, 6), y: 65 },
			{ x: new Date(2023, 11, 7), y: 73 },
			{ x: new Date(2023, 11, 8), y: 86 },
			{ x: new Date(2023, 11, 9), y: 74 },
			{ x: new Date(2023, 11, 10), y: 75 },
			{ x: new Date(2023, 11, 11), y: 76 },
			{ x: new Date(2023, 11, 12), y: 84 },
			{ x: new Date(2023, 11, 13), y: 87 },
			{ x: new Date(2023, 11, 14), y: 66 },
			{ x: new Date(2023, 11, 15), y: 69 }
		]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Виконано",
		dataPoints: [
			{ x: new Date(2023, 11, 1), y: 55 },
			{ x: new Date(2023, 11, 2), y: 77 },
			{ x: new Date(2023, 11, 3), y: 66 },
			{ x: new Date(2023, 11, 4), y: 44 },
			{ x: new Date(2023, 11, 5), y: 67 },
			{ x: new Date(2023, 11, 6), y: 63 },
			{ x: new Date(2023, 11, 7), y: 69 },
			{ x: new Date(2023, 11, 8), y: 71 },
			{ x: new Date(2023, 11, 9), y: 73 },
			{ x: new Date(2023, 11, 10), y: 69 },
			{ x: new Date(2023, 11, 11), y: 72 },
			{ x: new Date(2023, 11, 12), y: 79 },
			{ x: new Date(2023, 11, 13), y: 88 },
			{ x: new Date(2023, 11, 14), y: 59 },
			{ x: new Date(2023, 11, 15), y: 66 }
		]
	  }]
	}

  setFilter (range:number) {
    this.chartOptions.title.text = `Подано\\виконано за ${range} днів`
    this.chartOptions = {...this.chartOptions};
  }
}
