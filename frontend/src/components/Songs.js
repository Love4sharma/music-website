  import React from "react";
import "./CSS/songs.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Songs = () => {
  let [song, SetSong] = useState([]);

  async function getSongs() {
    try {
      const res = await axios.get("http://localhost:8080/home");
      SetSong(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="content">
      {song.map((song) => (
        <div key={song.id} className="song-item">
          <img src={song.image_path} alt="" className="songimage" />
          <h6>{song.title}</h6>
          <div className="fav">
            <p>{song.artist}</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Songs;
