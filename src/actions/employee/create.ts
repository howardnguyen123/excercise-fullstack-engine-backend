import client from '../../lib/prisma';

type CreateEmployeeParams = {
    name: string;
    email: string;
};

export default async function createEmployee({ name, email }: CreateEmployeeParams) {
    const employee = await client.employee.findUnique({ where: { email } });

    if (employee) {
        throw new Error(`Employee with email ${email} already exists`);
    }

    return await client.employee.create({
        data: {
            name,
            email,
        },
    });
}
