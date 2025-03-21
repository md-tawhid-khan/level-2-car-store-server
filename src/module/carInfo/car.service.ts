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

const getSingleCar=async(id:string)=>{
    const result=await Car.findById(id)
    return result
 }

 const updateCar=async(id:string,data:ICar)=>{
    const result=await Car.findByIdAndUpdate(id,data,{new:true})
    return result
 }

 const deleteCar=async(id:string)=>{
    const result=await Car.findByIdAndDelete(id,{new:true})
    return result
 }

export const  carService = {
    createCar,
    getAllCar,
    getSingleCar,
    updateCar,
    deleteCar
}