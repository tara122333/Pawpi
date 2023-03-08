// Libraries
import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    shopName: {
        type:String,
        required:true,
    },
    category : {
        type : String,
        required : true,
    },
    city : {
        type:String,
        required:true,
    },
    address :{
            type:String,
            required:true,
    },
    mapLocation :{
            type:String,
            required:true,
    },
    website: String,
    contactNumber: Number,
    reviews: [
        { 
            type: mongoose.Types.ObjectId, 
            ref: "Reviews" 
        }
    ],
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },

});

export const SellerModel = mongoose.model("Sellers",SellerSchema);