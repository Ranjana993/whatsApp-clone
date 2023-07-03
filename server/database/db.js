import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const URL = "mongodb://localhost:27017/whatsapp"


const Connection = async()=>{
    try {
        await mongoose.connect(URL , {useUnifiedTopology:true})
        console.log("Connected ");
    } catch (error) {
        console.log(" error",error.message);
    }
}
export default Connection;