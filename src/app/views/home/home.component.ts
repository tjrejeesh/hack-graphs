import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  herodetails: any;
  logo: string;
  twoColumns: any;
  twoColumns2: any;
  layout: any;
  layout2: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.herodetails = {
      title: 'I understand You',
      desc: ' An intelligent AI model with a capability to understand and segment your Customer Base by continuously self learning their behaviours, spending indices, appetite for data and digital imprints to categorize/identify and allocate to right compute strategy. A Multi Access Edge Computing Strategy and infrastructure to utilize the diversity, location, protection and data.',
      heroImg: 'hero1.JPG'
    };
    this.twoColumns = {
      title: 'I cater to you',
      desc: 'Set up Customer centric offerings wrt online gamers, with the help of our above model. make requirement based configurable network offerings more easy',
      img: 'twoColumn1.JPG'
    };
    this.twoColumns2 = {
      title: 'I am (Resilient Capable)',
      desc: 'An intelligent data driven Algo to help implement an efficient and economic Edge computing system, instrumental in taking Telstra to the next level.',
      img: 'twoColumn2.JPG'
    };
    this.layout = 'left-text';
    this.layout2 = 'right-text';
  }
  navigate(){
    this.router.navigateByUrl('/dashboard');
  }
}
