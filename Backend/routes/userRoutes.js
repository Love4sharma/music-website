const express=require("express")
const router=express.Router()

//import controllers
const {signin,signup}=require('../controllers/userController')

//mapping api's
router.post('/signup',signup)
router.post('/login',signin)

//export
module.exports=router