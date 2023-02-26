// import package and modules
import { UserModel } from "../../database/Users";
import express from "express";

// Router
const Router = express.Router();

/*
route      ==> /signup
method     ==> POST
Des        ==> signUp with email and password
params     ==> none
Access     ==> public
*/

Router.post("/signup",async(req,res)=>{
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        res.status(200).json({
            token, message : "user added successfully",status:"success"
        })
    } catch (error) {
        return res.status(500).json({ message : "error",error: error.message });
    }
})

/*
route      ==> /signin
method     ==> POST
Des        ==> signUp with email and password
params     ==> none
Access     ==> public
*/
Router.post("/signin",async(req,res)=>{
    try {
        console.log(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        console.log(user);
        const token = user.generateJwtToken();
        res.status(200).json({
            token, status:"success"
        })
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;
