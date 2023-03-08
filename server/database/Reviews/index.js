import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Types.ObjectId, 
        ref: "Products" 
    },
    seller: { 
        type: mongoose.Types.ObjectId, 
        ref: "Sellers" 
    },
    user: { 
        type: mongoose.Types.ObjectId, 
        ref: "Users" 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    reviewText: { 
        type: String, 
        required: true 
    },
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      },
    ],
},
{
    timestamps: true,
}
);
export const ReviewModel = mongoose.model("Reviews", ReviewSchema);