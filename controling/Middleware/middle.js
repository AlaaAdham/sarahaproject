import {verification} from '../../services/token.js'
import { Usermodel } from './../../DB/models/user.model.js';
import { profile } from './../../User/user.controller.js';
export const auth=async (req,res,next)=>{
    const {authorization}= req.headers;
    if(!authorization?.startsWith(process.env.key)){ 
    return res.json({message:'not'})
    }


     const token=authorization.split(process.env.key)[1];
    // return res.json(token)

const check=verification(token)
const user= await Usermodel.findById(check.id)
if(user)
{
req.id=user.id
next();
//return res.json({message: req.id})
}
}