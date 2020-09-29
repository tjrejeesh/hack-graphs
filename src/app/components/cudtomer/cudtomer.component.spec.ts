import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CudtomerComponent } from './cudtomer.component';

describe('CudtomerComponent', () => {
  let component: CudtomerComponent;
  let fixture: ComponentFixture<CudtomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CudtomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CudtomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
