// Importing Env Variables
require("./database/AllModals");

// import modules and package
import express from 'express';

const port = 4000;

// microservice routes
import Auth from './API/Auth';

// Database conncetion
import ConnectDB from'./database/connection';

// app name
const pawpi = express();

// application middlewares
pawpi.use(express.json());
pawpi.use(express.urlencoded({ extended: false }));


// Application Routes
pawpi.use("/auth",Auth);

pawpi.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

pawpi.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
})