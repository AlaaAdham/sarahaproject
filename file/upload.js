import multer from "multer"
function fileup(){
    const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'file')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const up=multer({storage})
return up;

}
export default fileup;