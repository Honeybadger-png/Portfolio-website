import express from "express";
import {getAllTasks,getTask,createTask} from "../controllers/TaskController.js";
import { uploadMultipleFiles,uploadFile,createProject } from "../controllers/Projectcontroller.js"

import multer from 'multer';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../uploads')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + "-"+req.body.name
        cb(null,file.fieldname + '-'+ uniqueSuffix + '-' + file.originalname)
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null,true)
    } else {
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'),false);
    }
    cb(null,true)
}

const upload = multer({storage:storage,fileFilter:fileFilter});

router.route('/').get(getAllTasks);
router.route('/create').post(createTask)
router.route('/fileUpload').post(uploadMultipleFiles,uploadFile)
router.post('/createProject',upload.fields([{name:'mainImage',maxCount:1},{name:'images',maxCount:10}]),createProject)

router.route('/:id').get(getTask);

export default router;