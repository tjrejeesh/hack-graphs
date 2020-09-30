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
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
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
      title: {
        text: 'Service Utilisation'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        shared: false,
        valuePrefix: 'AUD '

      },
      series: [
        {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get('rgba')]
            ]
          },
          enableMouseTracking: false,
          name: 'Gamers',
          data: [0, 2000, 2200, 2600, 3000, {
            marker: {
              fillColor: '#f1f075',
              lineWidth: 3,
              lineColor: '#f1f075' // inherit from series
            }, y: 3500
          }, 4000, 4200, 4600, 4800, 5000, 5500]
        },
        {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[1]],
              [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Revenue',
          data: [0, 110000, 121000, 143000, 165000, 192500, 220000, 231000, 253000, 264000, 275000, 302500]
        }, {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[2]],
              [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Edge costs(Fixed)',
          data: [80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000, 80000]
        }, {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[3]],
              [1, Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Variable Cost',
          data: [0, 70000, 77000, 91000, 105000, 122500, 140000, 147000, 161000, 168000, 175000, 192500]
        }, {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[4]],
              [1, Highcharts.color(Highcharts.getOptions().colors[4]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Total Cost (Fixed + Variable)',
          data: [80000, 150000, 157000, 171000, 185000, 202500, 220000, 227000, 241000, 248000, 255000, 272500]
        },
        {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, Highcharts.getOptions().colors[5]],
              [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Profit',
          data: [0, -20550, -17580, -11640, -5700, {
            marker: {
              fillColor: '#f1f075',
              lineWidth: 3,
              lineColor: '#f1f075' // inherit from series
            }, y: 1725
          }, 59150, 62120, 68060, 71030, 74000, 81425]
        }],
      xAxis: {
        categories: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19'],
        gridLineWidth: 1,
        minPadding: 0.05,
        maxPadding: 0.05

      },
      yAxis: {
        title: {
          text: 'COUNT'
        },
        gridLineWidth: 1,
      },
      legend: {
        align: 'center',
        enabled: true,
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 6,
      },
      plotOptions: {
        series: {
          type: 'curve',
          fillOpacity: 0.4, // set the fillOpacity
          threshold: null,
          marker: {
            enabled: true,
            radius: 5,
            width: 0,
            height: 0
          }
        }
      }

    };
    Highcharts.chart('container', this.configObj);

  }

}
