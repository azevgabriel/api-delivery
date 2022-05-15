import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

class AuthenticateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authenticateClientUseCase = new AuthenticateClientUseCase();
    const result = await authenticateClientUseCase.execute({
      username: req.body.username,
      password: req.body.password,
    });
    return res.json(result);
  }
}

export { AuthenticateClientController };
