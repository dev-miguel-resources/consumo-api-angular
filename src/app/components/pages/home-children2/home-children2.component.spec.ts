import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildren2Component } from './home-children2.component';

describe('HomeChildren2Component', () => {
  let component: HomeChildren2Component;
  let fixture: ComponentFixture<HomeChildren2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChildren2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildren2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
