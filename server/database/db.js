import mongoose from "mongoose"
import dotenv from "dotenv"
// Connect to MongoDB
export const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.error("Error connecting to MongoDB")
    }
}