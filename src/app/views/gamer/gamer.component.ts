import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.less']
})
export class GamerComponent implements OnInit {
  menu = [{ text: 'Dashboard', link: 'dashboard' }, { text: 'Gamers Dashboard', link: '' }];
  gamer = 'white';

  lineData = {
    labels: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19'],
    datasets: [
      {
        label: 'MAU',
        data: [65, 59, 65, 70, 62, 60, 72, 65, 69, 65, 70, 70],
        fill: false,
        borderJoinStyle: 'none',
        borderColor: 'maroon',
      },
      {
        label: 'WAU',
        data: [48, 56, 58, 45, 55, 50, 45, 48, 48, 43, 50, 45],
        fill: false,
        borderColor: 'blue',
        borderJoinStyle: 'none',
        backgroundColor: 'transparent'
      },
      {
        label: 'DAU',
        data: [35, 38, 32, 25, 30, 27, 35, 28, 25, 35, 28, 20],
        fill: false,
        borderColor: 'yellow',
        backgroundColor: 'transparent',
        borderJoinStyle: 'none',
      }
    ]
  };
  lineOptions = {
    bezierCurve: false,
    legend: {
      position: 'bottom',
      display: true,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      }
    },
    options: {
      bezierCurve: false,
      scales: {
        yAxes: [
          {
            ticks: {
              callback: (label, index, labels) => {
                return label / 1000 + 'k';
              }
            },
            scaleLabel: {
              display: true,
              labelString: '1k = 1000'
            }
          }
        ],
        xAxes: [{
          barPercentage: 0.1
      }]
      }
    }
  };
  curvedLineOptions = {
    legend: {
      position: 'bottom',
      display: true,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      }
    },
    options: {
      fillOpacity: .3,
      scales: {
        yAxes: [
          {
            ticks: {
              callback: (label, index, labels) => {
                return label / 1000 + 'k';
              }
            },
            scaleLabel: {
              display: true,
              labelString: '1k = 1000'
            }
          }
        ]
      }
    }
  };
  doughnutOptions = {
    legend: {
      position: 'right',
      display: true,
      labels: {
        usePointStyle: true,
        boxWidth: 12,
      }
    }
  };
  doughnutData = {
    labels: ['Windows', 'Mac OS', 'WebRTC', 'Android', 'Linux'],
    datasets: [
      {
        data: [15, 20, 30, 25, 10],
        backgroundColor: [
          '#346beb',
          '#d97e38',
          'grey',
          '#FFCE56',
          '#36A2EB',
        ],
        hoverBackgroundColor: [
          '#346beb',
          '#d97e38',
          'grey',
          '#FFCE56',
          '#36A2EB'
        ]
      }]
  };
  sessionData = {
    labels: ['JAN-20', 'FEB-20', 'MAR-20', 'APR-20', 'MAY-20', 'JUN-20', 'JUL-20', 'AUG-20', 'SEP-20'],
    datasets: [
      {
        label: 'LTE',
        data: [1, 2, 5, 4, 3, 1, 4, 2, 3, 6, 7, 2],
        fill: true,
        borderColor: 'skyblue',
        lineTension: 0,
        backgroundColor: [
          'rgba(211, 243, 255, 0.5)'
      ]
      },
    ]
  };
  dataSource = {
    labels: ['Morning', 'Noon', 'Lunch Break', 'Evening', 'Night'],
    datasets: [
      {
        label: 'Hours',
        backgroundColor: '#0064D2',
        data: [2, 3, 6, 5, 8, 9, 0],
        barThickness: 35,
      }
    ]
  };
  // peakHoursData = {
  //   labels: ['Morning', 'Noon', 'Lunch Break', 'Evening', 'Night'],
  //   datasets: [

  //   ],
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             callback: (label, index, labels) => {
  //               return label / 1000 + 'k';
  //             }
  //           },
  //           scaleLabel: {
  //             display: true,
  //             labelString: '1k = 1000'
  //           }
  //         }
  //       ]
  //     }
  //   }
  // };
  reliabilityData = {
    labels: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19'],
    datasets: [
      {
        label: 'Success',
        data: [78, 79, 77, 80, 80, 80, 79, 76, 80, 76, 78, 80, 0],
        fill: true,
        borderColor: 'green',
        backgroundColor: ['rgba(82,255,168,0.4)', 'rgba(145,232,66,0.5)'],
        lineTension: 0
      },
      {
        label: 'Hardware',
        data: [85, 83, 82, 83, 85, 85, 85, 84, 85, 85, 82, 85, 0],
        fill: true,
        borderColor: 'orange',
        backgroundColor: ['rgba(228, 123, 40, 0.3)'],
        lineTension: 0
      },
      {
        label: 'App Crash',
        data: [90, 90, 89, 90, 88, 87, 90, 90, 90, 86, 89, 90],
        fill: true,
        borderColor: 'red',
        backgroundColor: ['rgba(228, 40, 40, 0.2)'],
        lineTension: 0
      },
      {
        label: 'Q-Time Issues',
        data: [100, 98, 97, 100, 100, 100, 96, 99, 99, 100, 98, 100],
        fill: true,
        borderColor: 'grey',
        backgroundColor: ['rgba(241, 241, 241, 0.5)'],
        lineTension: 0
      }
    ]
  };
  gameData = {
    labels: ['Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19'],
    datasets: [
      {
        label: 'Pubg',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 56, 40],
        fill: true,
        borderJoinStyle: 'none',
        borderColor: 'maroon',
        backgroundColor: ['rgba(247, 186, 173, 0.5)'],
      },
      {
        label: 'Fortnite',
        data: [18, 48, 60, 55, 66, 75, 77, 72, 69, 56, 66, 50],
        fill: true,
        borderColor: 'blue',
        borderJoinStyle: 'none',
        backgroundColor: 'lightBlue',
      },
      {
        label: 'Call of Duty',
        data: [28, 10, 90, 98, 25, 72, 20, 29, 45, 92, 65, 35],
        fill: true,
        borderColor: 'yellow',
        backgroundColor: '#FAFD9F',
        borderJoinStyle: 'none',
      },
      {
        label: 'Clash of Titans',
        data: [38, 18, 40, 19, 50, 27, 60, 70, 54, 20, 56, 55],
        fill: true,
        borderColor: 'orange',
        backgroundColor: '#FDCC9F',
        borderJoinStyle: 'none',
      },
      {
        label: 'Vainglory',
        data: [38, 18, 40, 19, 50, 27, 60, 70, 54, 20, 56, 55],
        fill: true,
        borderColor: 'green',
        backgroundColor: 'lightGreen',
        borderJoinStyle: 'none',
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
