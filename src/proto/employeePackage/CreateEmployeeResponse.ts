// Original file: src/proto/employee.proto

import type { EmployeeProto as _employeePackage_EmployeeProto, EmployeeProto__Output as _employeePackage_EmployeeProto__Output } from '../employeePackage/EmployeeProto';

export interface CreateEmployeeResponse {
  'status'?: (number);
  'data'?: (_employeePackage_EmployeeProto | null);
  'message'?: (string);
}

export interface CreateEmployeeResponse__Output {
  'status'?: (number);
  'data'?: (_employeePackage_EmployeeProto__Output);
  'message'?: (string);
}
