import Car from "../carInfo/car.model"
import { IOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrder=async(orderData:IOrder)=>{
     const car=await Car.findById(orderData.car)
     if(!car){
         throw new Error('car model not found')
     }
     if(car.quantity<orderData.quantity){
        throw new Error('insufficent car quantity')
     }

     car.quantity=car.quantity-orderData.quantity
     if(car.quantity===0){
        car.inStock=false 
     }

     await car.save()

     orderData.totalPrice=car.price*orderData.quantity

     const result=await Order.create(orderData)
     return result
}

export const orderServices={
    createOrder
}