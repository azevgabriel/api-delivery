import { hash } from 'bcrypt';

import { prisma } from '../../../../database/prismaClient';
import { Deliveryman } from '@prisma/client';

interface CreateDeliverymanDTO {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({
    username,
    password,
  }: CreateDeliverymanDTO): Promise<Deliveryman> {
    const usernameExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    if (usernameExists) {
      throw new Error('Username already exists');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
