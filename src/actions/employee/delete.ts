import client from '../../lib/prisma';

export default async function deleteEmployee(id: string) {
    return (
        await client.employee.deleteMany({
            where: {
                id,
            },
        })
    ).count;
}
