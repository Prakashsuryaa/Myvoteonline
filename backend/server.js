import express, { json } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {app} from './app.js';
// import router from './routes/movies.routes.js';

//require("dotenv").config();
dotenv.config({
  path: './.env'
});

// const app = express();


//middleware

app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 2001;

connectDB()
.then(() =>{
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
});