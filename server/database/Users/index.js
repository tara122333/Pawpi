import mongoose from 'mongoose'

// User Schema
const UserSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,

    },
    address : [
        {
            type : String
        }
    ],
    phoneNumber : [
        {
            type : Number
        }
    ]
    //  according to pet information
    // pet : [
    //     {
    //         type :
    //     }
    // ]
});

export const UserModel = mongoose.model("Users",UserSchema);