import { hash } from 'bcrypt';

import { prisma } from '../../../../database/prismaClient';
import { Clients } from '@prisma/client';

interface CreateClientDTO {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ username, password }: CreateClientDTO): Promise<Clients> {
    const usernameExists = await prisma.clients.findFirst({
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

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
