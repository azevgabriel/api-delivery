import { Request, Response } from 'express';
import { FindAllDeliveriesToClientUseCase } from './FindAllDeliveriesToClientUseCase';

class FindAllDeliveriesToClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllDeliveriesToClientUseCase =
      new FindAllDeliveriesToClientUseCase();
    const deliveries = await findAllDeliveriesToClientUseCase.execute(
      req.id_user
    );
    return res.json(deliveries);
  }
}

export { FindAllDeliveriesToClientController };
