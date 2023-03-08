// libraries
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    animalType: {
        type: String,
        required: true,
    },
    animalSubType: {
        type: String,
        required: true,
    },
    size: [{
        type: String,
    }],

    isVeg: {
        type: Boolean,
        default: false,
    },
    site: {
        type: String,
    },
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images",
    }],

    MRP: {
        type: Number,
        required: true,
    },
    price:
    {
        type: Number,
        default: 150,
        required: true,
    },

    coupon: {
        type: String,
    },

    discount: {
        type: Number
    },

    totalQuantity : {
        type : Number,
        required : true,
    },

    Disclaimer: [{
        type: String,
    }],

    instructions: [{
        type: String,
    }],

    tip: [{
        type: String,
    }],

    features: [{
        type: String,
    }],

    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Reviews"
        }
    ],
    seller: {
        type: mongoose.Types.ObjectId,
        ref: "Sellers",
        required: true,
    },

},
{
    timestamps: true,
});

export const ProductModel = mongoose.model("Products", ProductSchema);