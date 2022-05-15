import { Deliveries } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

interface CreateDeliveryDTO {
  item_name: string;
  id_client: string;
}

class CreateDeliveryUseCase {
  async execute({
    item_name,
    id_client,
  }: CreateDeliveryDTO): Promise<Deliveries> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
