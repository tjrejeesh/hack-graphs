import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.less']
})
export class TwoColumnsComponent implements OnInit {
  @Input()
  twoColumns: any;
  @Input()
  styleName: any;
  constructor() { }

  ngOnInit(): void {
  }

}
