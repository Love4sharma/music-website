const jwt=require('jsonwebtoken')
require('dotenv').config()
async function auth(req,res,next){
    try {
        // console.log(req.cookies.token);
        const token =req.cookies.token;
        
        if(token){
           try {
            let payload=jwt.verify(token,process.env.JWT_SECRETKEY)

           req.user=payload;
        //    console.log(req.user);
           next()
           
           } catch (error) {
            console.error("JWT verification failed:", error);
            return res.redirect('/login');
           }
        }
        else{
            return res.redirect('/login')
        }
    } catch (error) {
        return res.json({
            message:"internal server error",
            error:error.message
        })
    }
}

module.exports=auth