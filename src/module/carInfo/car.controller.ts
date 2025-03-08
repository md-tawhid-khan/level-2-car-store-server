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

const getSingleCar=async(req:Request,res:Response)=>{
    try {
        const id=req.params.carId
    const result=await carService.getSingleCar(id) 
    res.json({
        status:true,
        message:'successfully get single car information',
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

const updateCar=async(req:Request,res:Response)=>{
   try {
    const id=req.params.carId ;
    const data=req.body;
    const result= await carService.updateCar(id,data)
    res.json({
        status:true,
        message:' car information successfully updated',
        data:result
    })
   } catch (error) {
    res.json({
        status:false,
        message:'something went wrong ',
        error
    })
   }
}

const deleteCar=async(req:Request,res:Response)=>{
    try {
        const id=req.params.carId;
        const result=await carService.deleteCar(id)
        res.json({
            status:true,
            message:'successfully deleted car information',
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
    getAllCar,
    getSingleCar,
    updateCar,
    deleteCar
}