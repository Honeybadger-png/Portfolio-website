import express from "express";
import {getAllTasks,getTask} from "../controllers/tasks.js";
const router = express.Router();

router.route('/').get(getTask);

export default router;