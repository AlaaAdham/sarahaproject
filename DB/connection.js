import mongoose from "mongoose";
const connectdb= async()=>{
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(result =>{
        console.log('success')
    }).catch(error=>{
        console.log(`error: ${error}`);
    })
}
export default connectdb;