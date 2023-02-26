// import package and modules
import { UserModel } from "../../database/Users";
import express from "express";
import passport from 'passport';

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


/*
route      ==> /google
method     ==> get
Des        ==> google signin
params     ==> none
Access     ==> public
*/
Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}));


/*
route      ==> /google/callback
method     ==> get
Des        ==> google signin callback
params     ==> none
Access     ==> public
*/

Router.get("/google/callback",passport.authenticate("google",{ failureRedirect: "/" }),
    (req,res)=>{
        return res.json(
            {token : req.session.passport.user.token}
          );
    }
);

export default Router;
