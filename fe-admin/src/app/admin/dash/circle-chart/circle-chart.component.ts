import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  theme: "light1",
	  exportEnabled: true,
	  title: {
		text: "Найчастіші питання"
	  },
	  data: [{
		type: "pie", //change type to column, line, area, doughnut, etc
		indexLabel: "{name}: {y}%",
		dataPoints: [
			{ name: "Фінансова допомога", y: 45.1 },
			{ name: "Медична допомога", y: 16.2 },
			{ name: "Психологічна допомога", y: 14.6 },
      { name: "Пільги", y: 11.4 },
      { name: "Працевлаштування", y: 9.2 },
			{ name: "Інщі", y: 3.5 },
		]
	  }]
	}
}
