//  Libraries
import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "Users",
    },
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number
    },
    category : {
        type : String,
        required : true,
    },
    subcategory : {
        type : String,
        required : true,
    },
    hobbies : [{
        type : String,
    }],

    favfood : [{
        type : String,
    }],
    
    photos : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Images",
        }
    ],

},
{timestamps:true}
);

export const PetModel = mongoose.model("Pets",PetSchema);