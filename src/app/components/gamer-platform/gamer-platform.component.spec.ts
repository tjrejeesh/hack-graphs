import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerPlatformComponent } from './gamer-platform.component';

describe('GamerPlatformComponent', () => {
  let component: GamerPlatformComponent;
  let fixture: ComponentFixture<GamerPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
