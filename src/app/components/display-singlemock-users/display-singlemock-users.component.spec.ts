import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySinglemockUsersComponent } from './display-singlemock-users.component';

describe('DisplaySinglemockUsersComponent', () => {
  let component: DisplaySinglemockUsersComponent;
  let fixture: ComponentFixture<DisplaySinglemockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySinglemockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySinglemockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
