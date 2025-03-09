import Car from "../carInfo/car.model"
import { IOrder, ITotalRevenu, } from "./order.interface"
import { Order, Revenue } from "./order.model"

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

const createRevenue=async()=>{
    
    const pipeline=[
       {
        $group:{
            _id:null,
            totalRevenue:{$sum:"$totalPrice"}
        }
    }
    ]
    const revenue=await Order.aggregate(pipeline)

  
   
    const newRevenue=new Revenue(revenue[0] as ITotalRevenu)

    

    const result=await newRevenue.save()
    
    
    return result 
}

export const orderServices={
    createOrder,
    createRevenue
}