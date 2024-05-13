import React, { useState, useEffect, useContext } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MusicContext } from "../MusicContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SongBox = ({ id, image, title, artist, audio_path }) => {
  const token = localStorage.getItem("token");
  let [favicon, setFavIcon] = useState(
    "https://tse1.mm.bing.net/th?id=OIP.s6XYxIz4w9b-OQn4_4PyEwHaHa&pid=Api&P=0&h=180"
  );

  const navigate = useNavigate();

  const { currsong } = useContext(MusicContext);

  function handleclick(path, id) {
    currsong(path);
    // /userPlay/:songid

    axios
      .post(
        `http://localhost:8080/userPlay/${id}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log("song added to history");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handlefav(id) {
    console.log("token on frontend", token);
    setFavIcon("https://cdn-icons-png.flaticon.com/128/210/210545.png");
    axios
      .post(
        `http://localhost:8080/addToFavourites/${id}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log("song added to favorites");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      key={id}
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="flex flex-col text-white song-item w-72 h-[22.5rem] gap-2  hover:scale-105 rounded-md"
    >
      <img
        src={image}
        alt=""
        className="songimage w-72 h-60 rounded-t-2xl"
        onClick={() => handleclick(audio_path, id)}
      />
      <span className="text-base px-4">{title}</span>
      <div className="px-4 text-sm fav flex flex-row justify-between">
        <p>{artist}</p>
        <div className="favourite w-8 h-8" onClick={() => handlefav(id)}>
          <img src={favicon} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SongBox;
