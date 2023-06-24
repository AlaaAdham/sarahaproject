import { model } from 'mongoose';
import { Usermodel } from './../../DB/models/user.model.js';
import bcrypt from 'bcryptjs';
import { validation } from './../../validation/validation.js';
import {sendemail} from './../../sendemail/sendmail.js';
export const signupp=async(req,res)=>{
   const validresult=validation.validate(req.body,{abortEarly:false})
   if(validresult.error)
   {
   return res.json(validresult)
   }
   else{
   const {username,password,email}=req.body;

   const newpass= await bcrypt.hash(password,(parseInt(process.env.SALT_ROUND)))
   
   console.log(username,newpass,email);
   sendemail(email,'confirm email',`<a herf="#">verfiy</a>`)
   const newuser=new Usermodel({username,password:newpass,email});
   const nuser=await newuser.save();
}
}
