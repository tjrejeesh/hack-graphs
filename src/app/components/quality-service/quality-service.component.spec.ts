import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityServiceComponent } from './quality-service.component';

describe('QualityServiceComponent', () => {
  let component: QualityServiceComponent;
  let fixture: ComponentFixture<QualityServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
