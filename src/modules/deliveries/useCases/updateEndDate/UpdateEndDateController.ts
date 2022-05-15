import { Request, Response } from 'express';
import { UpdateEndDateUseCase } from './UpdateEndDateUseCase';

class UpdateEndDateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateEndDateUseCase = new UpdateEndDateUseCase();
    const delivery = await updateEndDateUseCase.execute({
      id_delivery: req.params.id_delivery,
      id_deliveryman: req.id_user,
    });
    return res.json(delivery);
  }
}

export { UpdateEndDateController };
