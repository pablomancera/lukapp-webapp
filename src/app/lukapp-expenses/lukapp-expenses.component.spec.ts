import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukappExpensesComponent } from './lukapp-expenses.component';

describe('LukappExpensesComponent', () => {
  let component: LukappExpensesComponent;
  let fixture: ComponentFixture<LukappExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LukappExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LukappExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
