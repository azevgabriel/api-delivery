import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryController';

class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const delivery = await createDeliveryUseCase.execute({
      item_name: req.body.item_name,
      id_client: req.id_user,
    });
    return res.json(delivery);
  }
}

export { CreateDeliveryController };
