//import {AsyncRouter, AsyncRouterInstance} from "express-async-router";
import { InventoryController } from './inventory.controller';
import { Router } from 'express';

//const RankingRouter: AsyncRouterInstance = AsyncRouter({send:false});
const InventoryRouter: Router = Router();

InventoryRouter.get('/', InventoryController.getInventory);

export default InventoryRouter;
