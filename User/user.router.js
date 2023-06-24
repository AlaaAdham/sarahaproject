import { Router } from "express";
import { profile , profilepic} from "./user.controller.js";
import { auth } from './../controling/Middleware/middle.js';
import fileup from "../file/upload.js";
const routerprofile=Router();
routerprofile.get('/profile',auth,profile);
routerprofile.patch('/pic',auth,fileup().single('image'),profilepic)
export default routerprofile;