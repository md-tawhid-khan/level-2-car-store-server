import { Request, Response } from "express";
import { carService } from "./car.service";

const createCar=async(req:Request,res:Response)=>{
    try {
        const carInfo= req.body;
    const result=await carService.createCar(carInfo)
    res.json({
        status:true,
        message:"create car information successfully",
        data:result
    })
    } catch (error) {
        res.json({
            status:false,
            message:'something went wrong',
            error
        })
    }
}

const getAllCar=async(req:Request,res:Response)=>{
      try {
        const result = await carService.getAllCar()
        res.json({
            status:true,
            message:'get all car successfully',
            data:result
        })
      } catch (error) {
        res.json({
            status:false,
            message:'something went wrong',
            error
        })
      }
}



export const  carController = {
    createCar,
    getAllCar
}