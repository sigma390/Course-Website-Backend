const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const adminRouter = require("./server/routes/admin");
const userRouter = require("./server/routes/user");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use("/admin",adminRouter)
app.use("/user",userRouter)

//==================> connect TO Mongo <======================
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb+srv://root:root@cluster0.pphcshu.mongodb.net/Courses',options
 ); 
 app.listen(3000,()=>{
    console.log(`started on 30000`);
 })