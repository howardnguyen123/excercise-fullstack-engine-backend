import { Employee } from '@prisma/client';
import client from '../../lib/prisma';

type UpdateEmployeeParams = {
    id: string;
    data: Partial<Employee>;
};

export default async function updateEmployee({ id, data }: UpdateEmployeeParams) {
    const existsEmployee = await client.employee.findUnique({ where: { id } });

    if (!existsEmployee) {
        throw new Error('Employee not found');
    }

    if (data.email) {
        const existsEmail = await client.employee.findUnique({ where: { email: data.email, NOT: {id} } });

        if (existsEmail) {
            throw new Error(`Employee with email ${data.email} already exists!`);
        }
        
    }

    return await client.employee.update({
        where: { id },
        data: data,
    });
}
