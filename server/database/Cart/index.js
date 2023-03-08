// libraries
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    user : {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    items : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Products",
            quantity: Number,
            price: Number,
        },
    ],
},{timestamps:true});

export const CartModel = mongoose.model("Carts",CartSchema);