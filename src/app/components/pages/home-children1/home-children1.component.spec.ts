import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildren1Component } from './home-children1.component';

describe('HomeChildren1Component', () => {
  let component: HomeChildren1Component;
  let fixture: ComponentFixture<HomeChildren1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChildren1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildren1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
