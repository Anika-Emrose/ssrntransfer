import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookarideComponent } from './bookaride.component';

describe('BookarideComponent', () => {
  let component: BookarideComponent;
  let fixture: ComponentFixture<BookarideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookarideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookarideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
