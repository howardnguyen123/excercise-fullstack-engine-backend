import { createEmployee, deleteEmployee, getMany, updateEmployee } from './actions/employee';
import { EmployeeHandlers } from './proto/employeePackage/Employee';
import { EmployeeProto } from './proto/employeePackage/EmployeeProto';

function toEmployeeProto(employee: {
    id: string;
    email: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
}): EmployeeProto {
    return {
        id: employee.id,
        email: employee.email,
        name: employee.name ?? '',
        createdAt: employee.createdAt.getSeconds().toString(),
        updatedAt: employee.updatedAt.getSeconds().toString(),
    };
}

export const services = {
    FetchEmployees(call, callback) {
        const fetchEmployees = async () => {
            getMany({ limit: call.request.limit ?? 10 })
                .then((employees) => {
                    callback(null, {
                        message: 'oki',
                        employees: employees.map((employee) => toEmployeeProto(employee)),
                        status: 200,
                    });
                })
                .catch((err: any) => {
                    callback(err, { message: err.message });
                });
        };

        fetchEmployees();
    },
    CreateEmployee(call, callback) {
        const handleCreateEmployee = async () => {
            const { email, name } = call.request;

            if (!email) {
                return callback(new Error('Email is required'));
            }

            if (!name) {
                return callback(new Error('Name is required'));
            }

            createEmployee({ email, name })
                .then((employee) => {
                    callback(null, { message: 'oki', data: toEmployeeProto(employee), status: 201 });
                })
                .catch((err: any) => {
                    callback(err, { message: err.message });
                });
        };

        handleCreateEmployee();
    },
    UpdateEmployee(call, callback) {
        const handleUpdateEmployee = async () => {
            const { id, ...data } = call.request;

            if (!id) {
                return callback(new Error('Id is required'));
            }

            updateEmployee({ id, data })
                .then((employee) => {
                    callback(null, {
                        data: toEmployeeProto(employee),
                        message: `Employee ${data.name} has been updated successfully`,
                        status: 200,
                    });
                })
                .catch((err: any) => {
                    callback(err, { message: err.message });
                });
        };

        handleUpdateEmployee();
    },
    DeleteEmployee(call, callback) {
        const handleDeleteEmployee = async () => {
            const { id } = call.request;

            if (!id) {
                return callback(new Error('Id is required'));
            }

            deleteEmployee(id)
                .then(() => {
                    callback(null, { message: 'oki', status: 200 });
                })
                .catch((err: any) => {
                    callback(err, { message: err.message });
                });
        };

        handleDeleteEmployee();
    },
} as EmployeeHandlers;
