const mongoose = require('mongoose');

const song=require('./models/song');

const path = require('path');
const fs=require('fs');

audiopath = path.join(__dirname, '/Songs/pop/piano-chillout-150079.mp3')
audioD=fs.readFileSync(audiopath)
const songs=[
      {
            title:"pop song",
            artist: "Ashutosh",
            genre: "electronic",
            duration: 172,
            audioData: audioD,
      }
]


async function seedDB(){
      await song.create(songs);
      console.log("data is seeded successfully");
}

module.exports = seedDB;






 // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3') // Provide the absolute file path here
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3') // Provide the absolute file path here
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3') // Provide the absolute file path here
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here,
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },
      // {
      //       title: "Song Title",
      //       artist: "Artist Name",
      //       genre: "Genre Name",
      //       duration: "Song Duration",
      //       filePath: path.resolve(__dirname, 'path_to_song_file.mp3'), // Provide the absolute file path here
      //       image:""
      // },