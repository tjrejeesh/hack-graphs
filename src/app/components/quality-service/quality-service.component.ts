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
  selector: 'app-quality-service',
  templateUrl: './quality-service.component.html',
  styleUrls: ['./quality-service.component.less']
})
export class QualityServiceComponent implements OnInit {
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          format: '{value} %'
        },
        gridLineWidth: 1,
      },
      tooltip: {
        shared: true,
        valueSuffix: ' %'
      },
     series: [{
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[1]],
            [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.7).get('rgba')]
          ]
        },
        name: 'Success',
        data: [78, 79, 77, 80, 80, 80, 79, 76, 80, 76, 78, 80]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[2]],
            [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get('rgba')]
          ]
        },
        name: 'Hardware',
        data: [85, 83, 82, 83, 85, 85, 85, 84, 85, 85, 82, 85]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[3]],
            [1, Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0.3).get('rgba')]
          ]
        },
        name: 'App Crash',
        data: [90, 90, 89, 90, 88, 87, 90, 90, 90, 86, 89, 90]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
          ]
        },
        name: 'Q-Time Issues',
        data: [100, 98, 97, 100, 100, 100, 96, 99, 99, 100, 98, 100],
      }]
    };
    Highcharts.chart('Qos', this.configObj);

  }

}
