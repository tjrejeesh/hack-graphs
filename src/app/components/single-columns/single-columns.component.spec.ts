import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnsComponent } from './single-columns.component';

describe('SingleColumnsComponent', () => {
  let component: SingleColumnsComponent;
  let fixture: ComponentFixture<SingleColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
