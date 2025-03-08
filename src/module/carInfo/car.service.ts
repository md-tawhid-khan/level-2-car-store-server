import { ICar } from "./car.interface"
import Car from "./car.model"

const createCar=async(payload:ICar)=>{
    const result=await Car.create(payload)
    return result
}

const getAllCar=async()=>{
    const result=await Car.find()
    return result
}



export const  carService = {
    createCar,
    getAllCar,
    
}