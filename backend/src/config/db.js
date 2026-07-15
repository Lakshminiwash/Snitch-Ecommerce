import mongoose from "mongoose";
import { config } from "./config.js";

const connectToDb = async ()=>{
    await mongoose.connect(config.MONGO_URI)
    console.log("mongodb is connected")
}

export default connectToDb