// Importing Env Variables
require("dotenv").config();
require("./database/AllModals");

// import libraries
import express from 'express'; // express
import cors from 'cors';  //cors
import helmet from 'helmet';  //helmet
import passport from 'passport'; //passport
const session = require('express-session') // session

const port = 4000;

// config
import googleAuthConfig from './config/google.config';

// microservice routes
import Auth from './API/Auth';

// Database conncetion
import ConnectDB from'./database/connection';

// app name
const pawpi = express();

// session
pawpi.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));


// application middlewares
pawpi.use(express.json());
pawpi.use(express.urlencoded({ extended: false }));
pawpi.use(helmet());
pawpi.use(cors());
pawpi.use(passport.initialize());
pawpi.use(passport.session());

// passport config
googleAuthConfig(passport);

// Application Routes
pawpi.use("/auth",Auth);

pawpi.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

pawpi.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
})