// Import Firebase SDK
const firebase = require("firebase/app");

const firebaseConfig = require('../firebase_cred');

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const song = require('../models/song');
const mongoose = require('mongoose');
const mm = require('music-metadata');

async function upload(req, res) {
    try {
      const songFile = req.files.song;
      const imageFile=req.files.image;
    //   console.log('Song details:', songFile);
    //   console.log('image details ',imageFile);
        const { title, artist, genre } = req.body;
        
        const storage = getStorage(app);

        try {
            const song_path = await uploadFile(storage, songFile,title,genre,'audio/mpeg');
            const song_url = await getDownloadURL(ref(storage, song_path));
            
            const image_path=await uploadFile(storage,imageFile,title,'image','image/jpeg')
            const image_url=await getDownloadURL(ref(storage,image_path))

            const duration = await getSongDuration(songFile[0].buffer);
            
            await song.create({ title, artist, genre, duration, audio_path:song_url ,image_path:image_url});

            return res.redirect('/upload');
        } catch (error) {
            console.log("failed to upload to firebase ");
            console.log(error.message);
            return res.status(500).json({ error: error.message });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Function to upload song file
async function uploadFile(storage, file ,title,genre,contentType) {
    try {
        // Create a reference to the storage location
        const storageRef = ref(storage, `${genre}/` + title);

        const snapshot = await uploadBytes(storageRef, file[0].buffer, {
            contentType: contentType 
        });

        // Log and return the full path
        const fullPath = snapshot.metadata.fullPath;
        console.log("file uploaded successfully to firebase "+fullPath);
        return fullPath;
    } catch (error) {
        console.error('Error uploading song:', error);
        throw error; // Throw the error for error handling
    }
}

async function getSongDuration(songBuffer) {
    try {
        // Read metadata from the song buffer
        const metadata = await mm.parseBuffer(songBuffer);

        // Extract duration from the metadata
        const durationInSeconds = metadata.format.duration;
        const durationFormatted = formatDuration(durationInSeconds);

        return durationFormatted;
    } catch (error) {
        console.error('Error getting song duration:', error);
        throw error;
    }
}
function formatDuration(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

module.exports = upload;