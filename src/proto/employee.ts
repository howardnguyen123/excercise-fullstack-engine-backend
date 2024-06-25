import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmployeeClient as _employeePackage_EmployeeClient, EmployeeDefinition as _employeePackage_EmployeeDefinition } from './employeePackage/Employee';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  employeePackage: {
    CreateEmployeeRequest: MessageTypeDefinition
    CreateEmployeeResponse: MessageTypeDefinition
    DeleteEmployeeRequest: MessageTypeDefinition
    DeleteEmployeeResponse: MessageTypeDefinition
    Employee: SubtypeConstructor<typeof grpc.Client, _employeePackage_EmployeeClient> & { service: _employeePackage_EmployeeDefinition }
    EmployeeProto: MessageTypeDefinition
    FetchEmployeesRequest: MessageTypeDefinition
    FetchEmployeesResponse: MessageTypeDefinition
    UpdateEmployeeRequest: MessageTypeDefinition
    UpdateEmployeeResponse: MessageTypeDefinition
  }
}

