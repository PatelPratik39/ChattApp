// const express = require('express');
// const dotenv = require("dotenv");
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req,res) => {
    res.send('Hello MERN!!')
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`yes Pratik!!, Server is runing on port ${PORT}`));