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
  selector: 'app-gamer-platform',
  templateUrl: './gamer-platform.component.html',
  styleUrls: ['./gamer-platform.component.less']
})
export class GamerPlatformComponent implements OnInit {
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
        categories: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19']
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
          fillOpacity: 0.4
        }
      },
      series: [
        {
          name: 'Pubg',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 56, 40],
        },
        {
          name: 'Fortnite',
          data: [18, 48, 60, 55, 66, 75, 77, 72, 69, 56, 66, 50],
        },
        {
          name: 'Call of Duty',
          data: [28, 10, 90, 98, 25, 72, 20, 29, 45, 92, 65, 35],
        },
        {
          name: 'Clash of Titans',
          data: [38, 18, 40, 19, 50, 27, 60, 70, 54, 20, 56, 55],
        },
        {
          name: 'Vainglory',
          data: [38, 18, 40, 19, 50, 27, 60, 70, 54, 20, 56, 55],
        }
      ]
    };
    Highcharts.chart('gamerplatform', this.configObj);

  }

}
