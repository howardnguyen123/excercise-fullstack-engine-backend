import client from '../../lib/prisma';

export async function getMany({ limit }: { limit: number }) {
    return await client.employee.findMany({ take: limit });
}
