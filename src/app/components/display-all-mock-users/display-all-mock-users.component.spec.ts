import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllMockUsersComponent } from './display-all-mock-users.component';

describe('DisplayAllMockUsersComponent', () => {
  let component: DisplayAllMockUsersComponent;
  let fixture: ComponentFixture<DisplayAllMockUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllMockUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllMockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
