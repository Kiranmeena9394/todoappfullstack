import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.route.js";

import connectDB from "./config/db.js";

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/todos", todoRoutes);


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
