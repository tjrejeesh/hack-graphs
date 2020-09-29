import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-columns',
  templateUrl: './single-columns.component.html',
  styleUrls: ['./single-columns.component.less']
})
export class SingleColumnsComponent implements OnInit {
  @Output()
  navigateToDashboard = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  showDemo() {
    this.navigateToDashboard.emit();
  }

}
