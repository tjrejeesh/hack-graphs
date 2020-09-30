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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit {
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
        showInLegend: false,
        name: 'Counts',
        data: [{y: 970031, color: '#aaff99'}, {y: 603934, color: '#50B432'}, {y: 502503, color: '#ED561B'}, {y:507177, color:'#64E572'}, {y:609658, color:'#FF9655'}]
      }],
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
          point: {
              events: {
                  click: function() {
                      if (this.category === 'Gamers') {
                        route.navigate(['dashboard/gamer']);
                      }

                  }
              }
          }
        }
      },
    };
    Highcharts.chart('barcontainer', this.configObj);
  }
}
