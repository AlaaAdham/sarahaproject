import {Usermodel} from './../../DB/models/user.model.js';
import messagemodel from './../../DB/models/message.model.js';
export const sendmessage=async(req,res)=>{
    const {receveid}=req.params;
    const {message}=req.body;
    const user= await Usermodel.findById(receveid);
    if(!user)
    {
        return res.status(404).json({message:'no'})
    }
    else{
        const c=await messagemodel.create({message,receveid})
        return res.json({message:'message is sent succesfully to :',user}) 
    }
}
export const getmessage=async(req,res)=>{
  const m= await messagemodel.find({receveid:req.id});
return res.json(m)

}
    