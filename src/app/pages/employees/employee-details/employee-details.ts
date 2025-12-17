import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Employee } from '../../../shared/employee';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../../../model/employees.model';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [DatePipe,CurrencyPipe,NgIf],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
  myEmployeeName: WritableSignal<string> = signal<string>('');
  myEmployeeEmailId: WritableSignal<string> = signal<string>('');

  myEmployeeObj: WritableSignal<Employees | null> = signal<Employees | null>(null);

  emloyeeService: Employee = inject(Employee);
  activedRoute: ActivatedRoute = inject(ActivatedRoute);



  ngOnInit(): void {
    this.activedRoute.params.subscribe({
      next: (_employeedetails: any) => {
        // console.log(_employeedetails);
        this.myEmployeeName.set(_employeedetails.employeeName);
        this.myEmployeeEmailId.set(_employeedetails.employeeEmail);
        // console.log({ name: this.myEmployeeName(), email: this.myEmployeeEmailId() });
        this.gettingEmployeeList();
      },
      error: (_error: Error) => {
        console.log(_error)
      },
      complete: () => {
        console.log('successfully getting params...');
      }
    });
  }

  gettingEmployeeList() {
    this.emloyeeService.myEmployeeDataListObservable$.subscribe({
      next: (_employeeData: Employees[]) => {
        // console.log(_employeeData);
        this.specificEmployeeObject(_employeeData);
      }
    })
  }

  specificEmployeeObject(_employees: Employees[]) {
    // console.log(_employees);
    const emp = _employees.find((_emp) =>
      _emp.employeeName.trim().toLowerCase() === this.myEmployeeName().trim().toLowerCase() &&
      _emp.employeeEmail.trim().toLowerCase() === this.myEmployeeEmailId().trim().toLowerCase()
    );

    if (emp) {
      console.log('Found Employee:', emp);
      this.myEmployeeObj.set(emp);
    } else {
      console.log('Employee not found');
    }
  }
}
