import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface AutenticateDeliverymanDTO {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({
    username,
    password,
  }: AutenticateDeliverymanDTO): Promise<string> {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    if (!deliverymanExists) {
      throw new Error('Deliveryman not found');
    }

    const passwordMatch = await compare(password, deliverymanExists.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    const token = sign(
      { username },
      process.env.MD5_DELIVERYMAN_SECRET || '150a8ec9d29a46d1f0051847597cab74',
      {
        subject: deliverymanExists.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };
