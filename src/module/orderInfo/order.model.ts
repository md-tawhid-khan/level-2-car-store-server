import { model, Schema } from "mongoose";

const orderSchema=new Schema({
    email:{type:String},
  car: {type:String},
  quantity: {type:Number},
  totalPrice: {type:Number}
})

export const Order=model('order',orderSchema)