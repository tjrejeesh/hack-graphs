import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  breadcrumb: any;
  @Input()
  layout: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
   console.log(this.breadcrumb);
  }
  goBack(url) {
    this.router.navigateByUrl(url);
  }
}
