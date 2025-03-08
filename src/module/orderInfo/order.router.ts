import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter=Router()

orderRouter.post('/create-order', orderController.createOrder)

export default orderRouter