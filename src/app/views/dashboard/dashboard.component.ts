import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  menu = [{text: 'Dashboard', link: ''}];
  navItem = ['process'];
  gamer = 'black';
  constructor() { }

  ngOnInit(): void {
  }

}
