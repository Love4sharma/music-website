const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const route=require('./routes/route');

const port=process.env.PORT ||8080;

const seedDB = require('./seed');

mongoose.connect('mongodb://127.0.0.1:27017/music-app1')
.then(()=>{
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("DB error"); 
    console.log(err)
})


// function to add song in db

seedDB();  //run one time only otherwise it will run on every refresh and data will added gain and again in DB

app.use(express.urlencoded({extended:true}));
app.use(route);

app.listen(port,()=>{
      console.log("server listening on 8080 port");
})