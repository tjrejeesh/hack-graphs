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
  selector: 'app-avg-session',
  templateUrl: './avg-session.component.html',
  styleUrls: ['./avg-session.component.less']
})
export class AvgSessionComponent implements OnInit {
  configObj: any;
  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    this.configObj = {
      chart: {
        type: 'area'
      },
      xAxis: {
        categories: ['Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20', 'Jun-20', 'Jul-20', 'Aug-20', 'Sep-20', 'Oct-20', 'Nov-20', 'Dec-20']
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          format: '{value} Hrs'
        },
        gridLineWidth: 1,
      },
      tooltip: {
        shared: true,
        valueSuffix: ' Hrs'
      },
      plotOptions: {
        series: {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          }
        }
      },

      series: [{
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Morning',
        data: [1, 2, 1, 1.3, 2, 1, 2, 1.4, 1.5, 1.7, 1, 2],
      },
      {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[1]],
            [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Noon',
        data: [2, 2, 3, 1, 2, 3, 2, 1, 4, 3, 1, 3],
      },
      {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[2]],
            [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Evening',
        data: [2, 1, 2, 1, 2, 1, 1, 3, 1, 2, 2, 3],
      },
      {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[3]],
            [1, Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Night',
        data: [4, 5, 5, 3, 6, 8, 6, 8, 3, 4, 9, 3],
      }]
    };
    Highcharts.chart('avgSession', this.configObj);

  }

}
