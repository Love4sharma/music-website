const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cors({origin: ['http://localhost:3000']}));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+'public')))

const songRoutes=require('./routes/songRoutes');
const userRoutes=require('./routes/userRoutes');

const PORT=process.env.PORT ||8080;

app.use(songRoutes,userRoutes);

app.listen(PORT,()=>{
      console.log(`server started at PORT NO : ${PORT}`);
})
const connectDB=require('./databaseConn')
connectDB()