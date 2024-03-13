const express=require('express');
const router=express.Router();
const song=require('../models/song');

router.get('/',(req,res)=>{
      
});


router.get('/home', async (req, res) => {
      try {
        let allSongs = await song.find({}); // Wait for the query execution
      //   res.json(allSongs); // Send the array of songs as JSON response
      res.set('content-type', 'audio/mpeg'); //

      const audioTag = `<audio controls autoplay>
          <source src="${allSongs[0].audioData}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`;
          res.send(audioTag);


        // res.send(`allSongs[0].audioData`);
        // console.log(allSongs[0]);
      } catch (error) {
        console.error("Error fetching songs:", error);
        res.status(500).json({ error: "Internal server error" }); // Send an error response
      }
    });


router.get('/home/playlist/romantic',(req,res)=>{
            
})


router.get('/home/playlist/motivational',(req,res)=>{

});


router.get('/home/playlist/sufi',(req,res)=>{

})


router.get('/home/playlist/pop',(req,res)=>{

});



router.get('/home/playlist/electronic',(req,res)=>{

});



router.get('/home/playlist/rap',(req,res)=>{

})



router.post('/home/search',(req,res)=>{

})


router.get('/home/history',(req,res)=>{

})

router.get('/home/favorites',(req,res)=>{
      
})


// router.post('/home/favorites/:id', (req, res) => {
      
// });



module.exports =router;