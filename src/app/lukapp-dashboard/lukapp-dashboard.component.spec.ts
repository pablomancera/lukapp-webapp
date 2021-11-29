import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukappDashboardComponent } from './lukapp-dashboard.component';

describe('LukappDashboardComponent', () => {
  let component: LukappDashboardComponent;
  let fixture: ComponentFixture<LukappDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LukappDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LukappDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
