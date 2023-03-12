// import Libraries
import express from 'express';
import multer from 'multer'
import { ImageModel } from '../../database/AllModels';
import { s3Upload } from '../../Utils/s3';

const Router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /
Des       get image to s3 bucket;
Params    _id            
Access    Public
Method    GET  
*/
Router.get("/:_id",async(req,res)=>{
    try {
        const image = await ImageModel.findById(req.params._id);
        res.status(200).json({image});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
});






/*
Route     /
Des       upload given image to s3 bucket, and saves file link to mongodb 
Params    none            
Access    Public
Method    POST  
*/
Router.post("/", upload.single("file"),async(req,res)=>{
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket:process.env.AWS_S3_BUCKET,
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            ACLs : "public-read",
        };
        const uploadImage = await s3Upload(bucketOptions);
        const newImage = {
            images : {
                location : uploadImage.Location
            }
        }
        const imagedata = await ImageModel.create(newImage);
        return res.status(200).json({imagedata});
    } catch (error) {
        return res.status(500).json({error : error.message});
        
    }
});


export default Router;