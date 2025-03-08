import { Router } from "express";
import { carController } from "./car.controller";

const carRouter=Router()

carRouter.post('/create',carController.createCar)

carRouter.get('/', carController.getAllCar)

carRouter.get('/:carId',carController.getSingleCar)

carRouter.patch('/update/:carId', carController.updateCar)

carRouter.delete('/delete/:carId',carController.deleteCar)

export default carRouter
