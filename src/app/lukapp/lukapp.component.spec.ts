import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukappComponent } from './lukapp.component';

describe('LukappComponent', () => {
  let component: LukappComponent;
  let fixture: ComponentFixture<LukappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LukappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LukappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
