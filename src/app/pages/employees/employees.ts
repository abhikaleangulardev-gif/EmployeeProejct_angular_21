import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeForm } from "./employee-form/employee-form";
import { EmployeeListName } from "./employee-list-name/employee-list-name";
import { EmployeeDetails } from "./employee-details/employee-details";
import { RouterOutlet } from "@angular/router";
import { Employee } from '../../shared/employee';

@Component({
  selector: 'app-employees',
  imports: [EmployeeForm, EmployeeListName, RouterOutlet],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees implements OnInit {
  myEmployeeIsActive: WritableSignal<boolean> = signal<boolean>(false);

  emloyeeService: Employee = inject(Employee);

  ngOnInit(): void {
    this.emloyeeService.myEmployeeFormIsActivedObservable$.subscribe((_isActive: boolean) => {
      console.log(_isActive);
      this.myEmployeeIsActive.set(_isActive);
    })
  }
}
