import { prisma } from '../../../../database/prismaClient';

interface UpdateDeliveryByDelivermanDTO {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateDeliveryByDeliverymanUseCase {
  async execute({
    id_delivery,
    id_deliveryman,
  }: UpdateDeliveryByDelivermanDTO) {
    const result = await prisma.deliveries.update({
      where: { id: id_delivery },
      data: {
        id_deliveryman,
      },
    });

    return result;
  }
}

export { UpdateDeliveryByDeliverymanUseCase };
