import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageUsersComponent } from './average-users.component';

describe('AverageUsersComponent', () => {
  let component: AverageUsersComponent;
  let fixture: ComponentFixture<AverageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
