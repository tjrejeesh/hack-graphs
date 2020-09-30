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
      { color: '#aaff99',
        showInLegend: false,
        name: 'Revenue',
        data: [{y: 800000, color: '#aaff99'}, {y: 600000, color: '#50B432'}, {y: 400000, color: '#ED561B'}, {y:650000, color:'#64E572'}, {y:60000, color:'#FF9655'}]
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
          text: 'Revenue'
        },
        gridLineWidth: 1,
      },
      plotOptions: {
        bar: {
          showInLegend: false,
          // dataLabels: {
          //     enabled: true
          // }
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
