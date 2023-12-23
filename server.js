import  express  from "express";
import mongoose from "mongoose";
import bodyparser from "express";
import contactRouter from "./routes/contact.js";

const app=express();
app.use(bodyparser.json());

app.use('/api',contactRouter);

mongoose.connect("mongodb+srv://anujmishra0811:FSR9jhkuysWN06LV@volcanus.hawaefc.mongodb.net/",{
    dbName:'TODO_Program'
}).then(()=>console.log("MongoDb Connected...!"));

const port=5000;
app.listen(5000,console.log("Server is running on 5000"));

