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
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.less']
})
export class RevenueComponent implements OnInit {

  configObj: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    const route = this.router;
    this.configObj = {
      chart: {
        type: 'column',
        zoomType: 'y',
        // backgroundColor:"#FBFAE4"
      },
      credits: {
        enabled: false
      },
      series: [
      {
        name: 'Revenue',
        data: [800000, 600000, 400000, 650000, 60000]
      }],
      tooltip: {
        valueSuffix: ' AUD'
      },
      xAxis: {
        categories: ['Gamers', 'IoT Industrial', 'Smart Farming', 'Medical IoT', 'Smart Home' ],
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
      plotOptions: {
        bar: {
          dataLabels: {
              enabled: true
          }
       },
        series: {
          lineWidth: 3,
          cursor: 'pointer',
        }
      },
    };
    Highcharts.chart('revcontainer', this.configObj);
  }


}
