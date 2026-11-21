// import dotenv from "dotenv";
// dotenv.config();
import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log("MongoDB connection failed:", error.message);
        console.log(process.env.MONGODB_URI);
        console.log("URI loaded?", typeof process.env.MONGODB_URI);
    }
}

export default connectDB;