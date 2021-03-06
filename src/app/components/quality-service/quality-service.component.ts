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
        categories: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19'],
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
      // tooltip: {
      //   shared: true,
      //   valueSuffix: ' %'
      // },
      series: [{
        fillColor: {
          linearGradient: [0, 0, 0, 0],
          stops: [
            [0, Highcharts.getOptions().colors[1]],
            [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Success',
        data: [78, 79, 77, 80, 80, 80, 79, 76, 80, 76, 78, 80]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 0],
          stops: [
            [0, Highcharts.getOptions().colors[2]],
            [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Hardware',
        data: [85, 83, 82, 83, 85, 85, 85, 84, 85, 85, 82, 85]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 0],
          stops: [
            [0, Highcharts.getOptions().colors[3]],
            [1, Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'App Crash',
        data: [90, 90, 89, 90, 88, 87, 90, 90, 90, 86, 89, 90]
      }, {
        fillColor: {
          linearGradient: [0, 0, 0, 0],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        name: 'Q-Time Issues',
        data: [100, 98, 97, 100, 100, 100, 96, 99, 99, 100, 98, 100],
      }],
      tooltip: {
        // shared: true,
        formatter: function () {
          const baseline = [78, 79, 77, 80, 80, 80, 79, 76, 80, 76, 78, 80];
          if (this.series.name === 'Success') {
            const v = this.y;
            const x = this.x;
            return x + ' ' + this.series.name + ' ' + v + ' ' + '%';
          } else {
            const diff = baseline[this.series.data.indexOf( this.point )];
            console.log(diff);
            if (this.y >= diff) {
              const v = this.y - baseline[this.series.data.indexOf( this.point )];
              const x = this.x;
              return x + ' ' +this.series.name + ' ' + v + ' ' + '%';
            } else {
              const v = baseline[this.series.data.indexOf( this.point )] - this.y;
              const x = this.x;
              return x + ' ' + this.series.name + ' ' + v + ' ' + '%' ;
            }
          }
        }
      },
    };
    Highcharts.chart('Qos', this.configObj);

  }

}
