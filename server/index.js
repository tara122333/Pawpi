import express from 'express';

const app = express();

const port = 4000;

// Database conncetion
import ConnectDB from'./database/connection';

app.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

app.listen(port,()=>{
    console.log(`server has been started on port 4000`);
    ConnectDB().then(()=> console.log(`Listening on port ${port}... database has been connected`)).catch((err)=>console.log(`database not connected ${err}`));
})