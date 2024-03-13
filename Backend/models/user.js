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
            type:Number,
            trim:true,
            required:true
      }
});




let User=mongoose.model('User',userSchema);
module.exports=User;