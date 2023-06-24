import mongoose ,{ Schema,model,Types } from "mongoose";
const messageschema= new Schema(
    {
        message:{
            type:String,
            required:true,
        },
        receveid:{
            type:Types.ObjectId,
            required:true,
        }
    },
    {
        timestamps:true,
    }
)
const messagemodel=mongoose.models.message||model('message',messageschema);
export default messagemodel;