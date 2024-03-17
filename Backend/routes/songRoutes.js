const express=require('express');
const router=express.Router();
const song=require('../models/song');


//import controllers
const {getSongByCategory,getAllSongs}=require('../controllers/songController')

//mapping api's

router.get('/',)

router.get('/home',getAllSongs)

router.get('/home/playlist/:category',getSongByCategory)

router.post('/home/search',(req,res)=>{

})

router.get('/home/history',(req,res)=>{

})

router.get('/home/favorites',(req,res)=>{
      
})


// router.post('/home/favorites/:id', (req, res) => {
      
// });



module.exports =router;