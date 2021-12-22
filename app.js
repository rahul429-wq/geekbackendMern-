// import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import connectDB from "./db/connectdb.js";
import dotenv from "dotenv";
import web from "./routes/web.js";
dotenv.config();
const app = express();
app.use(cors());
// const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);
app.use(express.json());
app.use("/student", web);

app.listen(process.env.PORT, () => {
  console.log(`server is run on ${process.env.PORT}`);
});
