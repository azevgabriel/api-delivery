import { prisma } from '../../../../database/prismaClient';

class FindAllDeliveriesToDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
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

export { FindAllDeliveriesToDeliverymanUseCase };
