import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

class CreateDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username: req.body.username,
      password: req.body.password,
    });
    return res.json(result);
  }
}

export { CreateDeliverymanController };
