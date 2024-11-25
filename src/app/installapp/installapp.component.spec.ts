import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallappComponent } from './installapp.component';

describe('InstallappComponent', () => {
  let component: InstallappComponent;
  let fixture: ComponentFixture<InstallappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
