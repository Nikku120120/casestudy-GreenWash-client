import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWashComponent } from './book-wash.component';

describe('BookWashComponent', () => {
  let component: BookWashComponent;
  let fixture: ComponentFixture<BookWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
