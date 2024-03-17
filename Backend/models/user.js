const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
      email:{
            type:String,
            trim:true,
            required:true
      },
      name:{
            type:String,
            trim:true,
            required:true
      },
      password:{
            type:String,
            trim:true,
      }
});


module.exports=mongoose.model('User',userSchema);;