const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const { options } = require('../routes/userRoutes')
require('dotenv').config()
async function signup(req,res){
    try {
        const {name,email,password}=req.body;
        console.log(name,email,password);
        if(email&&password){
            let existingUser=await User.findOne({email:email})

            if(existingUser){
                return res.status(500).json({
                    message:"user already exist",
                })
            }
            let hashedPassword;
            try {
                hashedPassword=await bcrypt.hash(password,10)

            } catch (error) {
                return  res.status(500).json({
                    message:"could not hash password",
                    error:error,
                })
            }

            const user=await User.create({name,email,password:hashedPassword});

            return res.status(200).json({
                message:"user created successfully",
                
            })
            
        }
        else{
            return res.status(500).json({
                message:"please fill all the details",
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error,
        })
    }
}

async function signin(req,res){
    try {
        const {email,password}=req.body;
        //validate data
        if(!email || !password){
            return res.status(500).json({
                message:"please fill all details"
            })
        }
        // check if user exists
        const user=await User.findOne({email:email});
        // console.log(user);
        if(!user){
            return res.status(500).json({
                message:"user is not registered",
            })
        }
        
        const payload={
            email:user.email,
            userid:user._id,
        }
        
        // compare password
        if(await bcrypt.compare(password,user.password)){
            let token= jwt.sign(payload,process.env.JWT_SECRETKEY,{
                expiresIn:"2h",
            });
            // user=user.toObject();
            // user.token=token;
            user.password=undefined
            // console.log(user);

            const options={
                expires:new Date( Date.now() + 2*24*60*60*1000),
                httpOnly:true,
                
            }
            return res.cookie("token",token,options).status(200).json({
                message:"user logged in successfully",
                token:token,
                user:user
            })
        }
        else{
            return res.status(500).json({
                message:"password is incorrect"
            })
        }


    } catch (error) {
        return res.json({
            message:"internal server error",
            error:error,
        })
    }
}

module.exports={signup,signin};