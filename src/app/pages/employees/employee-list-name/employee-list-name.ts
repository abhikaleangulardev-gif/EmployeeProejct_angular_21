import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../shared/employee';
import { Employees } from '../../../model/employees.model';


@Component({
  selector: 'app-employee-list-name',
  imports: [],
  templateUrl: './employee-list-name.html',
  styleUrl: './employee-list-name.css',
})
export class EmployeeListName implements OnInit {
  myEmployeeArrayList: WritableSignal<Employees[]> = signal<Employees[]>([]);
  rotuer: Router = inject(Router);
  activedRoute: ActivatedRoute = inject(ActivatedRoute);
  emloyeeService: Employee = inject(Employee);

  ngOnInit(): void {
    this.gettingEmployeesList();
  }

  gettingEmployeesList() {
    this.emloyeeService.myEmployeeDataListObservable$.subscribe({
      next: (_employees: Employees[]) => {
        // console.log(_employees);
        this.myEmployeeArrayList.set(_employees);
      },
      error: (_error: Error) => {
        console.log(_error);
      },
      complete: () => {
        console.log('SuccessFully Getting EmployeesList');
      }
    })
  };

  onNavigateEmployeeDetails(employeeObj: Employees) {
    // console.log(employeeObj);
    this.rotuer.navigate([`employedetails/${employeeObj.employeeName}/${employeeObj.employeeEmail}`], {
      relativeTo: this.activedRoute,
    })
  }

  onNavigateEmployeeForm() {
    const isFormActive: WritableSignal<boolean> = signal<boolean>(true);
    this.emloyeeService.myEmployeeFormIsActivedObservable$.next(isFormActive());
  }
}

