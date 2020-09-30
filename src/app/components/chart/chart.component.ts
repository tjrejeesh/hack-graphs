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
          // data: [41000, 61000, 122020, 162020, 192020, {
          //   marker: {
          //     fillColor: '#f1f075',
          //     lineWidth: 3,
          //     lineColor: '#f1f075' // inherit from series
          //   }, y: 102020
          // }, 222020, 262020, 352020, 382020, 512020, 322020]
          // data: [70000, 100000, 150000, 161000, 175000,
          //   {
          //     marker: {
          //       fillColor: '#f1f075',
          //       lineWidth: 3,
          //       lineColor: '#f1f075' // inherit from series
          //     }, y: 200000
          //   }
          //   , 220000, 217000, 231000, 218000, 235000, 252500]
            data: [64000, 120000, 125600, 136800, 148000, 162000, 176000, 181600, 192800, 198400, 204000, 218000]
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
          data: [51200, 96000, 100480, 109440, 166500,
            {
              marker: {
                fillColor: '#FFFF00',
                lineWidth: 14,
                lineColor: '#FFFF00' // inherit from series
              }, y: 200475
            },
            242000, 431300, 506100, 523280, 545700, 585875]
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
              [0, Highcharts.getOptions().colors[4]],
              [1, Highcharts.color(Highcharts.getOptions().colors[4]).setOpacity(0.1).get('rgba')]
            ]
          },
          name: 'Total Cost (Fixed + Variable)',
          data: [80000, 150000, 157000, 171000, 185000, 202500, 220000, 227000, 241000, 248000, 255000, 272500]
        }],
        // },
        // {
        //   fillColor: {
        //     linearGradient: [0, 0, 0, 300],
        //     stops: [
        //       [0, Highcharts.getOptions().colors[5]],
        //       [1, Highcharts.color(Highcharts.getOptions().colors[5]).setOpacity(0.1).get('rgba')]
        //     ]
        //   },
        //   name: 'Profit',
        //   data: [0, -20550, -17580, -11640, -5700, {
        //     marker: {
        //       fillColor: '#f1f075',
        //       lineWidth: 3,
        //       lineColor: '#f1f075' // inherit from series
        //     }, y: 1725
        //   }, 59150, 62120, 68060, 71030, 74000, 81425]
        // }],
      xAxis: {
        categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21'],
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
