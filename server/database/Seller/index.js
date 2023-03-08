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
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },

},
{
    timestamps: true,
});

export const SellerModel = mongoose.model("Sellers",SellerSchema);