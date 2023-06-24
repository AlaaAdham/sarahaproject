import { Router } from "express"
import {signupp}  from "./signup.js"
const router=Router();
router.post('/sig',signupp);
export default router;