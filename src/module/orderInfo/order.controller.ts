import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder=async(req:Request,res:Response)=>{
   try {
    const data=req.body
    const result = await orderServices.createOrder(data)
    res.json({
        status:true,
        message:'Order created successfully',
        data:result
    })
   } catch (error) {
    res.json({
        status:false,
        message:"something went wrong",
        error
    })
   }

}

const createRevenue=async(req:Request,res:Response)=>{
    try {
     const result = await orderServices.createRevenue()
     res.json({
        status:true,
        message:'successfully sum all price of order',
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

export const orderController ={
    createOrder,
    createRevenue
}