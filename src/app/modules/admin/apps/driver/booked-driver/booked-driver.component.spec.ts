import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedDriverComponent } from './booked-driver.component';

describe('BookedDriverComponent', () => {
  let component: BookedDriverComponent;
  let fixture: ComponentFixture<BookedDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
