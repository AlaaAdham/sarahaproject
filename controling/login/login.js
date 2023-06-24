import { Usermodel } from './../../DB/models/user.model.js';
import {comparefunction } from './compare.js';
import { generate } from './../../services/token.js';
export const login=async(req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    const userfound=await Usermodel.findOne({email:email});
    if(!userfound){
    return res.json({message:"not found"});
    }
    else{
    const pass=await comparefunction(password,userfound.password);
    if(!pass)
    {
    return res.json({message:'pass not correct'});
    }
    else{ 
        const gentoken=generate({id:userfound._id});
         return res.json({message:'Done',gentoken});
         

    
}
}
}