import { Request, Response } from 'express';
import { FindAllWithoutEndDateUseCase } from './FindAllWithoutEndDateUseCase';

class FindAllWithoutEndDateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();
    const deliveries = await findAllWithoutEndDateUseCase.execute();
    return res.json(deliveries);
  }
}

export { FindAllWithoutEndDateController };
