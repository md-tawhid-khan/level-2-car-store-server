import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter=Router()

orderRouter.post('/create-order', orderController.createOrder)

orderRouter.post('/revenue',orderController.createRevenue)

export default orderRouter
