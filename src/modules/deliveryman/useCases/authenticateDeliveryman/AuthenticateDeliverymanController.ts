import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

class AuthenticateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username: req.body.username,
      password: req.body.password,
    });
    return res.json(result);
  }
}

export { AuthenticateDeliverymanController };
