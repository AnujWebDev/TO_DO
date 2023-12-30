import  express  from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from "./routes/contact.js";
import cors from 'cors';
import { config } from "dotenv";

const app=express();
app.use(bodyparser.json());

config({
    path:'.env'
})

app.use(cors({
    origin:process.env.Frontend_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use('/api',contactRouter);

mongoose.connect(process.env.Mongo_URL,{
    dbName:'TODO_Program'
}).then(()=>console.log("MongoDb Connected...!"));

const port=5000;
app.listen(5000,console.log("Server is running on 5000"));

