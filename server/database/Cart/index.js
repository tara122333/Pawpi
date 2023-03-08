// libraries
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user : {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    items : [
        {
            product: { type: mongoose.Types.ObjectId, ref: "Products" },
            quantity: { type: Number, required: true },
            price : {type : Number, required : true},
        }
    ],
},{timestamps:true});

export const CartModel = mongoose.model("Carts",CartSchema);