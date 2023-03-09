import mongoose from "mongoose";

const UserForgotPasswordSchema = mongoose.Schema({
    userId : {
        type : String
    },
    uniqueString : {
        type : String
    },
    createdAt : {
        type : Date,
    },
    expireAt : {
        type : Date,
    }
},{
    timestamps:true
});

export const UserForgotPasswordModel = mongoose.model("ForgotPassword",UserForgotPasswordSchema);