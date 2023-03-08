//   libraries
import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "Users",
    },
    seller: { 
        type: mongoose.Types.ObjectId, 
        ref: "Sellers" 
    },
    order : { 
        type: mongoose.Types.ObjectId, 
        ref: "Orders" 
    },
    status : {
        type : String,
    },
    delivery_address: {
        type : String,
        required : true,
    },

    estimated_delivery_date: {
        type : Date,
        required : true,
    },
    
},{ timestamps : true});

export const DeliveryModel = mongoose.model("Deliveries", DeliverySchema);