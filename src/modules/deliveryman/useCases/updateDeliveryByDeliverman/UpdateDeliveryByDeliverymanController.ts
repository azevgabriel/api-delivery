import { Request, Response } from 'express';
import { UpdateDeliveryByDeliverymanUseCase } from './UpdateDeliveryByDeliverymanUseCase';

class UpdateDeliveryByDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateDeliveryByDeliverymanUseCase =
      new UpdateDeliveryByDeliverymanUseCase();
    const delivery = await updateDeliveryByDeliverymanUseCase.execute({
      id_delivery: req.params.id_delivery,
      id_deliveryman: req.id_user,
    });
    return res.json(delivery);
  }
}

export { UpdateDeliveryByDeliverymanController };
