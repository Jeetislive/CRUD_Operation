import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./database/db.js";
import cors from "cors";
import router from "./routes/route.js"

dotenv.config(
    { path: "./.env" }
);

// Initialize express app
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json({ extended: true }));

// Parse incoming URL-encoded requests with extended syntax
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/",router);

// Get port from environment variable or default to 8000
const PORT = process.env.PORT || 8000; 


app.get("/",(req, res) => {
    res.send("Hello World!");
});

// Connect to MongoDB
connectDB();

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})