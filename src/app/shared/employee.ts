import { Injectable, signal, WritableSignal } from '@angular/core';
import { Gender } from '../enum/gender.enum';
import { Department } from '../enum/department.enum';
import { Employees } from '../model/employees.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  // we can create in employeeList 
  private employeeDataList: WritableSignal<Employees[]> = signal<Employees[]>([
    new Employees(
      'Meena Patil',
      'https://cdn.pixabay.com/photo/2024/08/21/17/02/ai-generated-8986826_1280.jpg',
      'meena@gmail.com',
      9876543210,
      Gender.female,
      Department.CUSTOMER_SUPPORT,
      'Executive Customer Support',
      23000,
      new Date('2024-12-03'),
      {
        city: 'Pune',
        taluka: 'Haveli',
        district: 'Pune',
        state: 'Maharashtra',
        pincode: 411001
      }
    ),
    new Employees(
      'Rahul Patil',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2XJHrJKKmw5EGnvBvKFS429HiPOKDjqheA&s',
      'rahul@gmail.com',
      9123456789,
      Gender.male,
      Department.IT,
      'Angular Developer',
      45000,
      new Date('2023-08-15'),
      {
        city: 'Mumbai',
        taluka: 'Andheri',
        district: 'Mumbai',
        state: 'Maharashtra',
        pincode: 400053
      }
    ),
    new Employees(
      'Sneha Sharma',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwp-SIvBDutuNPbrV2GIhkHD4Q5YDnUmov8A&s',
      'sneha@gmail.com',
      9988776655,
      Gender.female,
      Department.HR,
      'HR Manager',
      50000,
      new Date('2022-05-10'),
      {
        city: 'Bangalore',
        taluka: 'Whitefield',
        district: 'Bangalore',
        state: 'Karnataka',
        pincode: 560066
      }
    )
  ]);

  // send to the employeelist in mulitple component using behaviour subject

  myEmployeeDataListObservable$: BehaviorSubject<Employees[]> = new BehaviorSubject<Employees[]>(this.employeeDataList());

  myEmployeeFormIsActivedObservable$: Subject<boolean> = new Subject<boolean>();

}
