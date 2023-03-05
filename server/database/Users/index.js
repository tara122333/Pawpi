// import Libraries
import mongoose from 'mongoose'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
    verified : {
        type : Boolean,
        default : false,
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
    ],
    profilePic : [
        {
            type : String
        }
    ],
    //  according to pet information
    // pet : [
    //     {
    //         type :
    //     }
    // ]
},{timestamps:true});


// Methods 
UserSchema.methods.generateJwtToken = function(){
    return jwt.sign({ user : this._id.toString()},"pawpiApp");
}


// Static feature

// findByEmailAndPhone
UserSchema.statics.findByEmailAndPhone = async({email,phoneNumber})=>{
    const checkUserMobile = await UserModel.findOne({phoneNumber});
    const checkUserEmail = await UserModel.findOne({email});
    if(checkUserEmail || checkUserMobile){
        throw new Error("User already exits....");
    }
    return false;
}

// findByEmailAndPassword
UserSchema.statics.findByEmailAndPassword = async({email,password})=>{
    // check whether email exist
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("User does no exist!!!");
    // Compare password
    const passwordcompare = await bcrypt.compare(password,user.password);
    if(!passwordcompare) throw new Error("invalid Password!!!");
    return user;
}


// password bcryption
UserSchema.pre("save",function(next){
    const user = this;
    // password is modified
    if(!user.isModified("password")) return next();

    // generate bcrypt salt
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);
        // hash the password
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error);
            // assigning hashed password
            user.password = hash;
            return next();
        })
    })
});


export const UserModel = mongoose.model("Users",UserSchema);