const express=require('express');
const router=express.Router();
const song=require('../models/song');
const path=require('path')

//import controllers
const {uploadSongs,getSongByCategory,getAllSongs}=require('../controllers/songController')
const upload=require('../controllers/uploadSong')

const multer  = require('multer');
// Set up storage for uploaded files
const storage = multer.memoryStorage(); // Store files in memory

// Initialize multer with the storage configuration
const upload1 = multer({ storage: storage });
//mapping api's

router.get('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/upload.html'))
});
router.post('/upload', upload1.single('song'),upload)


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