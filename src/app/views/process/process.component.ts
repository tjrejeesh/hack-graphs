import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.less']
})
export class ProcessComponent implements OnInit {
  loading: boolean;
  graphFlag = false;
  navItem = ['dashboard'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoOutput(){
    this.loading = true;
    setTimeout(
      (): void => {
        this.graphFlag = true;
        // const el = document.getElementById('outputGraph');
        // el.scrollTop = el.scrollHeight;
        this.loading = false;
      },
      1000
    );
  }
}
