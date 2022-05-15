import { Router } from 'express';

import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';

// CONTROLADORES //
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryUseCase';
import { FindAllWithoutEndDateController } from './modules/deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { UpdateDeliveryByDeliverymanController } from './modules/deliveryman/useCases/updateDeliveryByDeliverman/UpdateDeliveryByDeliverymanController';
import { FindAllDeliveriesToClientController } from './modules/clients/useCases/findAllDeliveriesToClient/FindAllDeliveriesToClientController';
import { FindAllDeliveriesToDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveriesToDeliveryman/FindAllDeliveriesToDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();
const updateDeliveryByDeliverymanController =
  new UpdateDeliveryByDeliverymanController();
const findAllDeliveriesToClientController =
  new FindAllDeliveriesToClientController();
const findAllDeliveriesToDeliverymanController =
  new FindAllDeliveriesToDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

// ROTAS //
const routes = Router();

routes.get(
  '/clients/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesToClientController.handle
);
routes.post('/clients/auth', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);

routes.get(
  '/deliverymen/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesToDeliverymanController.handle
);
routes.post('/deliverymen/auth', authenticateDeliverymanController.handle);
routes.post('/deliverymen', createDeliverymanController.handle);

routes.get(
  '/deliveries',
  ensureAuthenticateDeliveryman,
  findAllWithoutEndDateController.handle
);
routes.post(
  '/deliveries',
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.put(
  '/deliveries/:id_delivery',
  ensureAuthenticateDeliveryman,
  updateDeliveryByDeliverymanController.handle
);
routes.put(
  '/deliveries/:id_delivery/end',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

routes.get('/', (req, res) => {
  return res.json({
    message: 'Server is running',
  });
});

export { routes };
