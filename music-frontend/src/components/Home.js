import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Songs from "./Songs";
import { MusicContext } from "../MusicContext";
import "../App.css";
const Home = () => {
  const { songpath } = useContext(MusicContext);
  return (
    <div className="flex flex-col gap-3 h-screen position-relative">
      <Navbar />
      <div></div>
      <div className="flex flex-row flex-grow gap-3 position-relative w-full">
        <Sidebar />
        <Songs />
      </div>
      <div className="flex justify-center items-center h-screen text-2xl z-50 playsongs position-absolute right-0 -mt-16 z-50 bottom-0  w-full h-20 text-white bg-[#0c1e44]">
        {songpath == null ? (
          <p>PLAY THE SONGS...</p>
        ) : (
          <audio
            src={songpath}
            controls
            className="flex justify-between audionsong w-full h-16 "
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default Home;
