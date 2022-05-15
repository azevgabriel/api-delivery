import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username: req.body.username,
      password: req.body.password,
    });
    return res.json(result);
  }
}

export { CreateClientController };
