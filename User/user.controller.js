export const profile=(req,res)=>{
    return res.json({message:'profile'})
}
export const profilepic=(req,res)=>{
    return res.json({message: req.file})
}