// import Libraries
import express from 'express';
import passport from 'passport';
import multer from 'multer'
import { ImageModel } from '../../database/AllModels';
import { s3Upload } from '../../Utils/s3';

const Router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async(req,res)=>{
    
});