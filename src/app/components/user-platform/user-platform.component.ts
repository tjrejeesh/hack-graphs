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
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.less']
})
export class UserPlatformComponent implements OnInit {
  configObj: any;
  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    this.configObj = {
      chart: {
        renderTo: 'container',
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
          text: '',
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: false
              },
              startAngle: -0,
              endAngle: 360,
              center: ['50%', '50%'],
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        floating: false,
        backgroundColor: '#3E3E3E'
      },
      series: [{
          type: 'pie',
          innerSize: '50%',
          data: [
              ['Windows', 58.9],
              ['Mac OS', 13.29],
              ['WebRTC', 13],
              ['Android', 3.78],
              ['Linux', 3.42]
          ]
      }]
  };
    Highcharts.chart('userPlatform', this.configObj);

  }

}
