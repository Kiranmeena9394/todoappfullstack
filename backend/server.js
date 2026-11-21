
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// Connect to MongoDB
connectDB();

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Node.js Backend is Running!");
});

// Sample API
app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    message: "Users API is working",
    users: []
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
