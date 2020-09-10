const express = require("express")
const app = express()
const port = 5000
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mern-boilerplate-v1:mern-boilerplate-v1@cluster0.1gmop.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser:true,
useUnifiedTopology:true

}).then(()=>console.log("db connected"))
.catch(err=>console.log(err))

app.get("/", (req,res)=>res.send("hello world"))

app.listen(port, ()=> console.log("server is running"))
