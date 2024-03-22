const mongoose=require('mongoose')
const song=require('../models/song')

async function getAllSongs(req,res){
    try {
        const songs=await song.find({});
        res.json(songs);
    } catch (error) {
        console.log(error);
    }
}
async function getSongByCategory(req,res){
    try {
        const category=req.params.category;

        const songs=await song.find({genre:category});

        res.json(songs);
    } catch (error) {
        console.log(error);
    }
}
module.exports={getAllSongs,getSongByCategory}