// Original file: src/proto/employee.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateEmployeeRequest as _employeePackage_CreateEmployeeRequest, CreateEmployeeRequest__Output as _employeePackage_CreateEmployeeRequest__Output } from '../employeePackage/CreateEmployeeRequest';
import type { CreateEmployeeResponse as _employeePackage_CreateEmployeeResponse, CreateEmployeeResponse__Output as _employeePackage_CreateEmployeeResponse__Output } from '../employeePackage/CreateEmployeeResponse';
import type { DeleteEmployeeRequest as _employeePackage_DeleteEmployeeRequest, DeleteEmployeeRequest__Output as _employeePackage_DeleteEmployeeRequest__Output } from '../employeePackage/DeleteEmployeeRequest';
import type { DeleteEmployeeResponse as _employeePackage_DeleteEmployeeResponse, DeleteEmployeeResponse__Output as _employeePackage_DeleteEmployeeResponse__Output } from '../employeePackage/DeleteEmployeeResponse';
import type { FetchEmployeesRequest as _employeePackage_FetchEmployeesRequest, FetchEmployeesRequest__Output as _employeePackage_FetchEmployeesRequest__Output } from '../employeePackage/FetchEmployeesRequest';
import type { FetchEmployeesResponse as _employeePackage_FetchEmployeesResponse, FetchEmployeesResponse__Output as _employeePackage_FetchEmployeesResponse__Output } from '../employeePackage/FetchEmployeesResponse';
import type { UpdateEmployeeRequest as _employeePackage_UpdateEmployeeRequest, UpdateEmployeeRequest__Output as _employeePackage_UpdateEmployeeRequest__Output } from '../employeePackage/UpdateEmployeeRequest';
import type { UpdateEmployeeResponse as _employeePackage_UpdateEmployeeResponse, UpdateEmployeeResponse__Output as _employeePackage_UpdateEmployeeResponse__Output } from '../employeePackage/UpdateEmployeeResponse';

export interface EmployeeClient extends grpc.Client {
  CreateEmployee(argument: _employeePackage_CreateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employeePackage_CreateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employeePackage_CreateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employeePackage_CreateEmployeeRequest, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employeePackage_CreateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employeePackage_CreateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employeePackage_CreateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employeePackage_CreateEmployeeRequest, callback: grpc.requestCallback<_employeePackage_CreateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employeePackage_DeleteEmployeeRequest, callback: grpc.requestCallback<_employeePackage_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  
  FetchEmployees(argument: _employeePackage_FetchEmployeesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  FetchEmployees(argument: _employeePackage_FetchEmployeesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  FetchEmployees(argument: _employeePackage_FetchEmployeesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  FetchEmployees(argument: _employeePackage_FetchEmployeesRequest, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  fetchEmployees(argument: _employeePackage_FetchEmployeesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  fetchEmployees(argument: _employeePackage_FetchEmployeesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  fetchEmployees(argument: _employeePackage_FetchEmployeesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  fetchEmployees(argument: _employeePackage_FetchEmployeesRequest, callback: grpc.requestCallback<_employeePackage_FetchEmployeesResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateEmployee(argument: _employeePackage_UpdateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employeePackage_UpdateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employeePackage_UpdateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employeePackage_UpdateEmployeeRequest, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employeePackage_UpdateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employeePackage_UpdateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employeePackage_UpdateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employeePackage_UpdateEmployeeRequest, callback: grpc.requestCallback<_employeePackage_UpdateEmployeeResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EmployeeHandlers extends grpc.UntypedServiceImplementation {
  CreateEmployee: grpc.handleUnaryCall<_employeePackage_CreateEmployeeRequest__Output, _employeePackage_CreateEmployeeResponse>;
  
  DeleteEmployee: grpc.handleUnaryCall<_employeePackage_DeleteEmployeeRequest__Output, _employeePackage_DeleteEmployeeResponse>;
  
  FetchEmployees: grpc.handleUnaryCall<_employeePackage_FetchEmployeesRequest__Output, _employeePackage_FetchEmployeesResponse>;
  
  UpdateEmployee: grpc.handleUnaryCall<_employeePackage_UpdateEmployeeRequest__Output, _employeePackage_UpdateEmployeeResponse>;
  
}

export interface EmployeeDefinition extends grpc.ServiceDefinition {
  CreateEmployee: MethodDefinition<_employeePackage_CreateEmployeeRequest, _employeePackage_CreateEmployeeResponse, _employeePackage_CreateEmployeeRequest__Output, _employeePackage_CreateEmployeeResponse__Output>
  DeleteEmployee: MethodDefinition<_employeePackage_DeleteEmployeeRequest, _employeePackage_DeleteEmployeeResponse, _employeePackage_DeleteEmployeeRequest__Output, _employeePackage_DeleteEmployeeResponse__Output>
  FetchEmployees: MethodDefinition<_employeePackage_FetchEmployeesRequest, _employeePackage_FetchEmployeesResponse, _employeePackage_FetchEmployeesRequest__Output, _employeePackage_FetchEmployeesResponse__Output>
  UpdateEmployee: MethodDefinition<_employeePackage_UpdateEmployeeRequest, _employeePackage_UpdateEmployeeResponse, _employeePackage_UpdateEmployeeRequest__Output, _employeePackage_UpdateEmployeeResponse__Output>
}
