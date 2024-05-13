const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("../middlewares/auth");
//import controllers
const {
  getSongByCategory,
  getAllSongs,
  playSong,
  getRecentlyPlayed,
  getMostPlayed,
  getFavourites,
  addToFavourites,
  search,
} = require("../controllers/songController");
const upload = require("../controllers/uploadSong");

const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory
const upload1 = multer({ storage: storage });

//mapping api's
router.post("/userPlay/:songid", auth, playSong);
router.get("/getRecentlyPlayed", auth, getRecentlyPlayed);
router.get("/getMostPlayed", auth, getMostPlayed);
router.get("/getFavourites", auth, getFavourites);
router.post("/addToFavourites/:songid", auth, addToFavourites);
router.post("/search", search);

router.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/upload.html"));
});
// router.post('/upload', upload1.single('song'),upload)
router.post(
  "/upload",
  upload1.fields([{ name: "song" }, { name: "image" }]),
  upload
);

router.get("/home", getAllSongs);

router.get("/home/playlist/:category", getSongByCategory);

module.exports = router;
