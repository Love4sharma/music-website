const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const cookieParser = require('cookie-parser');




app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+'public')))

const songRoutes=require('./routes/songRoutes');
const userRoutes=require('./routes/userRoutes');

const PORT=process.env.PORT ||8080;

// const seedDB = require('./seed');




// function to add song in db

// seedDB();  //run one time only otherwise it will run on every refresh and data will added gain and again in DB


app.use(songRoutes,userRoutes);

app.listen(PORT,()=>{
      console.log(`server started at PORT NO : ${PORT}`);
})
const connectDB=require('./databaseConn')
connectDB()