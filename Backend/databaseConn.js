const mongoose = require('mongoose');
require('dotenv').config()
async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connection successfull");
    } catch (error) {
        console.log("db connection failed ");
        console.log(error.message);
    }
}
module.exports=connectDB