import { Router } from 'express';

// CONTROLADORES //
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

// ROTAS //
const routes = Router();

routes.post('/clients/auth', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);
routes.post('/deliverymen/auth', authenticateDeliverymanController.handle);
routes.post('/deliverymen', createDeliverymanController.handle);
routes.get('/', (req, res) => {
  return res.json({
    message: 'Server is running',
  });
});

export { routes };
