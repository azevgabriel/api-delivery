import { Router } from 'express';

// CONTROLADORES //
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClient/AuthenticateClientController';

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

// ROTAS //
const routes = Router();

routes.post('/session', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);
routes.get('/', (req, res) => {
  return res.json({
    message: 'Server is running',
  });
});

export { routes };
