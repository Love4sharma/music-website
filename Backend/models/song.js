const mongoose= require('mongoose');

const SongSchema = new mongoose.Schema({
      title: {
          type: String,
          required: true
      },
      artist: {
          type: String,
          required: true
      },
      genre: {
          type: String,
          required: true
      },
      duration: {
          type: Number,
          required: true
      },
      audioData: {
          type: Buffer,
          required: true
      },
    //   image:{
    //     type: String,
    //     required: true
    //   }
  });



let Song=mongoose.model('Song',SongSchema);
module.exports=Song;