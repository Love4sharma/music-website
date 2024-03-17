const mongoose = require('mongoose');

const song = require('./models/song');


const songs = [
      // {
      //       title: "Tu Hai Kahan",
      //       artist: "ashutosh",
      //       genre: "romantic",
      //       duration: 263,
      //       path:"https://firebasestorage.googleapis.com/v0/b/musicapp-63457.appspot.com/o/romantic%2FTu-Hai-Kahan(PaglaSongs).mp3?alt=media&token=ba14e48b-30e5-424e-94d9-da8fa868571b" ,
      // },
      {
            title: "Close Your Eyes ",
            artist: "KSHMR X Tungevaag",
            genre: "english",
            duration: 172,
            path:"https://firebasestorage.googleapis.com/v0/b/musicapp-63457.appspot.com/o/english%2FClose-Your-Eyes(PaglaSongs).mp3?alt=media&token=7c36149f-68f1-4e31-8755-4c40b66593af" ,
      },

]


async function seedDB() {
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