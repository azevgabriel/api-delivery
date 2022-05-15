import { Request, Response } from 'express';
import { FindAllDeliveriesToDeliverymanUseCase } from './FindAllDeliveriesToDeliverymanUseCase';

class FindAllDeliveriesToDeliverymanController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllDeliveriesToDeliverymanUseCase =
      new FindAllDeliveriesToDeliverymanUseCase();
    const deliveries = await findAllDeliveriesToDeliverymanUseCase.execute(
      req.id_user
    );
    return res.json(deliveries);
  }
}

export { FindAllDeliveriesToDeliverymanController };
