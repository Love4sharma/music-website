const express=require("express")
const router=express.Router()

//import controllers
const {signin,signup}=require('../controllers/userController')
const auth=require('../middlewares/auth');
//mapping api's
router.post('/signup',signup)
router.post('/login',signin)
router.get('/testRoute',auth,(req,res)=>{
    console.log(req.user.email);
    res.json({

        message:"working for "+req.user.email+" having id :"+req.user.userid,
    })
})

//export
module.exports=router