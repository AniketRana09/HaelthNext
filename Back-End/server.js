import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
//app config
const app = express();
const port = process.env.Port || 4000;

// middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// api end Point
app.get("/", (req, res) => {
  res.send("Api Is workinng");
});

app.listen(port, () => {
  console.log(`Server Started on port --> http://localhost:${port}`);
});
