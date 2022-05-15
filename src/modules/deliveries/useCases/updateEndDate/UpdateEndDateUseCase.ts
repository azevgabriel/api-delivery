import { prisma } from '../../../../database/prismaClient';

interface UpdateEndDateDTO {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateEndDateDTO) {
    const result = await prisma.deliveries.updateMany({
      where: { id: id_delivery, id_deliveryman },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}

export { UpdateEndDateUseCase };
