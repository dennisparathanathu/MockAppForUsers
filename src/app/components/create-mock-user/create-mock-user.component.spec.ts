import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMockUserComponent } from './create-mock-user.component';

describe('CreateMockUserComponent', () => {
  let component: CreateMockUserComponent;
  let fixture: ComponentFixture<CreateMockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
