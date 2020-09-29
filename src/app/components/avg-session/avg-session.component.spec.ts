import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgSessionComponent } from './avg-session.component';

describe('AvgSessionComponent', () => {
  let component: AvgSessionComponent;
  let fixture: ComponentFixture<AvgSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
