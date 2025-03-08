import { model, Schema } from "mongoose";

const carSchema=new Schema ({
    brand:{
        type:String,
         required:[true,'please provide car brand']},
    model:{
        type:String,
        required:[true,'please provide car model']},
    year:{
        type:Number, 
        required:[true,'please provide release year']
    },
    price:{
        type:Number,
        required:[true,'please provide car price']},
    category:{
        type:String,
        required:[true,'please provide car category'],
        enum:{values:['Sedan', 'SUV','Truck','Coupe','Convertible'],message:"please provide sedan suv,truck,coupe,or convertible"}},
    description:{
        type:String,
        required:true},
    quantity:{
        type:Number,
        required:true},
    inStock:{
        type:Boolean,
        required:true}
})

const Car= model("car",carSchema)

export default Car 