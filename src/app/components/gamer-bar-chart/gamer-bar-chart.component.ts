import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';
declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-gamer-bar-chart',
  templateUrl: './gamer-bar-chart.component.html',
  styleUrls: ['./gamer-bar-chart.component.less']
})
export class GamerBarChartComponent implements OnInit {
  configObj: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    const route = this.router;
    this.configObj = {
      chart: {
        type: 'column',
        zoomType: 'y',
        backgroundColor: '#FBFAE4'
      },
      credits: {
        enabled: false
      },
      series: [
        {
        name: 'Female',
        data: [1.38, 1.71, 1.08, 2.11]
      },
      {
        name: 'Male',
        data: [1.12, 1.45, 1.00, 1.92]
      }],
      xAxis: {
        categories: ['Gameing console', 'Computer (laptop or desktop)', 'AR/VR', 'Mobile Phone' ],
        gridLineWidth: 1,
        minPadding: 0.05,
        maxPadding: 0.05

      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          format: '{value}'
        },
        gridLineWidth: 1,
      },
      plotOptions: {
        bar: {
          dataLabels: {
              enabled: true
          }
       },
        series: {
          lineWidth: 3,
          cursor: 'pointer'
        }
      },
    };

    Highcharts.chart('hoursgraph', this.configObj);
  }
}
