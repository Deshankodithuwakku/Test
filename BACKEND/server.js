const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {
    
 
  });
  

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection Success!");
})

const StudentRouter=require("./routes/students.js");
http://Localhost:8070/student

app.use("/student",StudentRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
})
