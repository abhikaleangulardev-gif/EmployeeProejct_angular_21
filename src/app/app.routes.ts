import { Routes } from '@angular/router';
import { Employees } from './pages/employees/employees';
import { EmployeeDetails } from './pages/employees/employee-details/employee-details';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    {
        path: 'employees', component: Employees,
        children: [
            { path: 'employedetails/:employeeName/:employeeEmail', component: EmployeeDetails }
        ]
    }
];
