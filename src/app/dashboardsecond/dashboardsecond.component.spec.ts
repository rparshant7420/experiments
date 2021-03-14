import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsecondComponent } from './dashboardsecond.component';

describe('DashboardsecondComponent', () => {
  let component: DashboardsecondComponent;
  let fixture: ComponentFixture<DashboardsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
