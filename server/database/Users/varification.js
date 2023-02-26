import mongoose from "mongoose";

const UserVerificationSchema = mongoose.Schema({
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

export const UserVerificationModel = mongoose.model("UserVerification",UserVerificationSchema);