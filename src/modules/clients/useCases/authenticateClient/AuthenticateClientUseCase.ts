import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface AutenticateClientDTO {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: AutenticateClientDTO): Promise<string> {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    if (!clientExists) {
      throw new Error('Client not found');
    }

    const passwordMatch = await compare(password, clientExists.password);

    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    const token = sign(
      { username },
      process.env.MD5_CLIENT_SECRET || '143a8ec9d29a46d1f0051847597cab74',
      {
        subject: clientExists.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateClientUseCase };
