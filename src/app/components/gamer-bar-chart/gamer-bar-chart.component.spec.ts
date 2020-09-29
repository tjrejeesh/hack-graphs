import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerBarChartComponent } from './gamer-bar-chart.component';

describe('GamerBarChartComponent', () => {
  let component: GamerBarChartComponent;
  let fixture: ComponentFixture<GamerBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
