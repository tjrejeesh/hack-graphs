import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-average-users',
  templateUrl: './average-users.component.html',
  styleUrls: ['./average-users.component.less']
})
export class AverageUsersComponent implements OnInit {
  configObj: any;
  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    this.configObj = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Average fruit consumption during one week'
      },
      // legend: {
      //   layout: 'vertical',
      //   align: 'left',
      //   verticalAlign: 'top',
      //   x: 150,
      //   y: 100,
      //   floating: true,
      //   borderWidth: 1,
      //   backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      // },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          format: '{value} k'
        },
        gridLineWidth: 1,
      },
      tooltip: {
        shared: true,
        valueSuffix: ' K'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0
        }
      },
      series: [{
        name: 'MAU',
        data: [65, 59, 65, 70, 62, 60, 72, 65, 69, 65, 70, 70],
      }, {
        name: 'WAU',
        data: [48, 56, 58, 45, 55, 50, 45, 48, 48, 43, 50, 45],
      },
      {
        name: 'DAU',
        data: [35, 38, 32, 25, 30, 27, 35, 28, 25, 35, 28, 20]
      }]
    };
    Highcharts.chart('avgUsers', this.configObj);

  }

}
