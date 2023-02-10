const express = require("express");

const app = express();

app.get("/",async(req,res)=>{
    res.json({message : "Success"});
})

app.listen(4000,()=>{
    console.log(`server has been started on port 4000`);
})