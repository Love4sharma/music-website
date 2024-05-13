import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../App.css";
import SongBox from "./SongBox";
import { MusicContext } from "../MusicContext";
import { useLocation } from "react-router-dom";
const Songs = () => {
  const token = localStorage.getItem("token");

  let [song, SetSong] = useState([]);
  const { currCategory, search, searchData } = useContext(MusicContext);
  async function getSongs() {
    try {
      console.log(token);
      // console.log("current category is:" + currCategory   /getRecentlyPlayed);
      const res = await axios.get(currCategory);
      if (search && searchData.length > 0) {
        SetSong(searchData);
        console.log("songs are from search");
        console.log(searchData);
      } else if (currCategory.includes("/getFavourites")) {
        SetSong(res.data.data.favourites);
      } else if (currCategory.includes("/getRecentlyPlayed")) {
        console.log(res.data.data.recentlyPlayed);
        const arrayOfSongIds = res.data.data.recentlyPlayed.map(
          (obj) => obj.songid
        );
        console.log(arrayOfSongIds);
        SetSong(arrayOfSongIds);
      } else {
        // console.log(res.data.data);
        SetSong(res.data);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  // console.log("favourites song is");
  // console.log(song);
  useEffect(() => {
    getSongs();
  }, [currCategory, searchData]);

  return (
    <div
      className="songs text-lg flex flex-row flex-wrap justify-center pt-8 gap-5 w-[86%] h-[87vh] bg-gray-800 overflow-scroll "
      style={{
        boxShadow:
          "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
      }}
    >
      {song.map((song) => {
        return (
          <SongBox
            key={song._id}
            id={song._id}
            image={song.image_path}
            title={song.title}
            artist={song.artist}
            audio_path={song.audio_path}
          />
        );
      })}
    </div>
  );
};

export default Songs;
