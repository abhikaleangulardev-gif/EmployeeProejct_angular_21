import { Department } from "../enum/department.enum";
import { Gender } from "../enum/gender.enum";
import { Address } from "../interface/address.interface";


export class Employees {
    constructor(
        public employeeName: string,
        public employeeImage: string,
        public employeeEmail: string,
        public employeeContactNumber: number,
        public employeeGender: Gender,
        public employeeDepartment: Department,
        public employeeDesignation: string,
        public employeeSalary: number,
        public employeeDateOfJoining: Date,
        public employeeAddress: Address,
    ) { }
}