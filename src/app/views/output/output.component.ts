import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.less']
})
export class OutputComponent implements OnInit {
  chart: any = [];
  data;
  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
      labels: [6, 20, 40, 60, 80, 100, 115],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [0.00, 0.1, 0.2]
        },
        // {
        //     label: 'My Second dataset',
        //     backgroundColor: '#9CCC65',
        //     borderColor: '#7CB342',
        //     data: [28, 48, 40, 19, 86, 27, 90]
        // }
      ]
    };

  }
  gotoProcess() {
    this.router.navigate(['/process']);
  }
  gotoDashboard() {
    this.router.navigate(['']);
  }
}
