import { model, Schema } from "mongoose";

const orderSchema=new Schema({
    email:{type:String},
  car: {type:String},
  quantity: {type:Number},
  totalPrice: {type:Number}
})

const revenue=new Schema({
    totalRevenue:{type:Number,required:true}
})

export const Revenue=model('revenue',revenue)

export const Order=model('order',orderSchema)