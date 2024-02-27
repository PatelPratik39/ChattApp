// const express = require('express');
// const dotenv = require("dotenv");

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello MERN!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`yes Pratik!!, Server is runing on port ${PORT}`);
});