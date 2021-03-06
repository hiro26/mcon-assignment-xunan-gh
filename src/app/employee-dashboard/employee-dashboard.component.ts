import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'mc-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  toggle(employee: Employee) {
    employee.expand = !employee.expand;
  }

  toggleOnlyOne(employee: Employee) {
    this.selectedEmployee = employee;
  }

  doSomething(employee: Employee) {
    alert(`You've sleected employee: ${employee.name}`);
  }
}
