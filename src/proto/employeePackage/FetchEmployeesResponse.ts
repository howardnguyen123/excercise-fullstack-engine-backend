// Original file: src/proto/employee.proto

import type { EmployeeProto as _employeePackage_EmployeeProto, EmployeeProto__Output as _employeePackage_EmployeeProto__Output } from '../employeePackage/EmployeeProto';

export interface FetchEmployeesResponse {
  'status'?: (number);
  'employees'?: (_employeePackage_EmployeeProto)[];
  'message'?: (string);
}

export interface FetchEmployeesResponse__Output {
  'status'?: (number);
  'employees'?: (_employeePackage_EmployeeProto__Output)[];
  'message'?: (string);
}
