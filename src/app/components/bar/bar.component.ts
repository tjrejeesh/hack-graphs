import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  private data = [
    {Framework: 'Gamers', Stars: '700000', Color: '#6AC725', Url: 'dashboard/gamer'},
    {Framework: 'IoT Individual', Stars: '500000', Color: '#1F78B4', Url: 'dashboard/ioTIndividual'},
    {Framework: 'Smart Farming', Stars: '623420',  Color: '#FFE629', Url: 'dashboard/smartFarming'},
    {Framework: 'Medical Diagnosed', Stars: '800000', Color: '#00BAFF', Url: 'dashboard/medicalDiagnosed'},
    {Framework: 'Smart Home', Stars: '600000', Color: '#EF7F1F', Url: 'dashboard/smartHome'},
  ];
  private svg;
  private margin = 50;
  private width = 750;
 height = 280;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bar')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height + (this.margin * 2))
    .attr('class', 'svg')
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Framework))
  .padding(0.7);

  // Draw the X-axis on the DOM
  this.svg.append('g')
  .attr('transform', 'translate(0,' + this.height + ')')
  .call(d3.axisBottom(x))
  .selectAll('text')
  .style('text-anchor', 'end');


  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 800000])
  .range([this.height, 0]);
  y(40000);

  // Draw the Y-axis on the DOM
  this.svg.append('g')
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll('bars')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => x(d.Framework))
  .attr('y', d => y(d.Stars))
  .attr('width', 40)
  .attr('height', (d) => this.height - y(d.Stars))
  .attr('fill', (d) => d.Color)
  .on('click', (d, i) => {
    this.router.navigateByUrl(i.Url);
  });
}
}
