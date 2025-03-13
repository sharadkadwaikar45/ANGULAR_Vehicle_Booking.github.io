import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvenderComponent } from './addvender.component';

describe('AddvenderComponent', () => {
  let component: AddvenderComponent;
  let fixture: ComponentFixture<AddvenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
