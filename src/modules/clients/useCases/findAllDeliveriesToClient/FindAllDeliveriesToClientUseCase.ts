import { prisma } from '../../../../database/prismaClient';

class FindAllDeliveriesToClientUseCase {
  async execute(id_client: string) {
    const deliveries = prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliveriesToClientUseCase };
