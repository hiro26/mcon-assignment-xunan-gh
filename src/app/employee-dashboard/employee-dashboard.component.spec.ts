import {
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick
} from '@angular/core/testing';

import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeService, Employee } from '../employee.service';
import { Observable, of } from 'rxjs';
import { MatCardModule } from '@angular/material';

class MockEmployeeService {
  getEmployees(): Observable<Employee[]> {
    return of([
      {
        id: 1,
        name: null,
        username: null,
        email: null,
        address: null,
        phone: null,
        website: null,
        expand: false
      }
    ]);
  }
}

describe('EmployeeDashboardComponent', () => {
  let component: EmployeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeDashboardComponent>;
  let employeeService: EmployeeService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [EmployeeDashboardComponent],
      providers: [{ provide: EmployeeService, useClass: MockEmployeeService }]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = TestBed.get(EmployeeService);
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should load employees', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.employees.length).toEqual(1);
  }));

  it('should toggle employee bio visibility', fakeAsync(() => {
    component.ngOnInit();
    tick();
    component.toggle(component.employees[0]);
    expect(component.employees[0].expand).toBeTruthy();
  }));
});
