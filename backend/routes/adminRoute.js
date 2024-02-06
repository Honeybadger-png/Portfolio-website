import express from "express";
import {getAllTasks,getTask,createTask} from "../controllers/TaskController.js";
import { uploadMultipleFiles,uploadFile,createProject,dummyCreateProject } from "../controllers/Projectcontroller.js"

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

const uploadMultiple = multer({storage:storage,fileFilter:fileFilter}).array('images',10);
const uploadSingle = multer({storage:storage,fileFilter:fileFilter}).single('mainImage');

router.route('/').get(getAllTasks);
router.route('/create').post(createTask)
router.route('/fileUpload').post(uploadMultipleFiles,uploadFile)
router.post('/uploadFile',upload.fields([{name:'mainImage',maxCount:1},{name:'files',maxCount:10}]),createProject)
router.post('/createProject',upload.fields([{name:'mainImage',maxCount:1},{name:'files',maxCount:10}]),createProject)
router.post('/dummyCreateProject',dummyCreateProject);

router.route('/:id').get(getTask);

export default router;