require("dotenv").config();

// import package and modules
import { UserModel } from "../../database/Users";
import express from "express";
import passport from 'passport';
import transporter from '../../config/config.mail';
import { UserVerificationModel } from "../../database/AllModals";
import bcrypt from 'bcryptjs';

// Router
const Router = express.Router();


transporter.verify((error,success)=>{
    if(error){
        console.log("nodemailer verify error " + error);
    }
    else{
        console.log("Ready to send email");
        console.log("success " + success);
    }
});


const sendvarificationmail = (({_id,email},res)=>{
    const currentUrl = "http://localhost:4000/";
    const uId = "4521354tara151";
    const uniqueString = uId + _id;

    const mailOption = {
        from : process.env.AUTH_NODEMAILER_MAIL,
        to : email,
        subject : "Email Varification",
        html : `<p>
        Email Varification <br>
        <a href=${currentUrl + "auth/verify/" + _id + "/" + uniqueString}>
        ${currentUrl + "auth/verify/" + _id + "/" + uniqueString}
        </a>
        </p>`
    };

    const saltRound = 8;
    bcrypt.hash(uniqueString,saltRound).then((hashUniqueString)=>{
        const newVarification = new UserVerificationModel({
            userId : _id,
            uniqueString : hashUniqueString,
            createdAt : Date.now(),
            expireAt : Date.now() + 300000,
        });
        newVarification.save().then(()=>{
            transporter.sendMail(mailOption).then(()=>{
                console.log("mail sent and record save !!");
            }).catch((error)=>{
                console.log("mail sent error" + error);
                res.status(501).json({Error : error.message});
            });
        }).catch((error)=>{
            res.status(501).json({Error : error.message});
        })
    }).catch((error)=>{
        console.log("error in hashing data");
        res.status(501).json({Error : error.message});
    })
})



/* 
method = get
access = public
params = userId and uniqueString
url = /verify
des = varification using email link
*/
Router.get("/verify/:userId/:uniqueString",(req,res)=>{
    let {userId,uniqueString} = req.params;
    UserVerificationModel.find({userId}).then((result)=>{
        if(result.length > 0){
            const {expireAt} = result[0];
            const hashUniqueString = result[0].uniqueString;
            if(expireAt < Date.now()){
                UserVerificationModel.deleteOne({userId}).then((result)=>{
                    UserModel.deleteOne({_id : userId}).then(()=>{
                        console.log("user users database has been cleaning");
                    }).catch((error)=>{
                        console.log("users database not clearing for expire time");
                    res.status(501).json({Error : error.message});
                    })

                }).catch((error)=>{
                    console.log("user not clearing");
                    res.status(501).json({Error : error.message});
                })
            }
            else{
                bcrypt.compare(uniqueString,hashUniqueString).then((result)=>{

                    if(result){
                        UserModel.updateOne({_id:userId},{
                            verified : true
                        }).then(()=>{
                            console.log("user successfully verified");
                            UserModel.findOne({_id : userId}).then((data)=>{
                                console.log(data);
                                // const token = data.generateAuthToken();
                                // console.log(token);
                            }).catch((error)=>{
                                console.log("token Not generate");
                                res.status(501).json({Error : error.message});
                            })
                            res.status(200).json({
                                message : "Success Verification"
                            });
                        }).catch((error)=>{
                            console.log("user not update for varification");
                            res.status(501).json({Error : error.message});
                        })
                    }
                    else{
                        console.log("verification passed check your mail");
                    }

                }).catch((error)=>{
                    console.log("user uniqueString not matches");
                    res.status(501).json({Error : error.message});
                })
            }
        }
        else{
            console.log("data has been don't exist or already verified");
        }


    }).catch((error)=>{
        console.log("user not exist");
        res.status(501).json({Error : error.message});
    });
});





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
        sendvarificationmail(newUser);
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
