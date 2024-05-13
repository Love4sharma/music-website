import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div
      className="flex flex-col box"
      style={{
        background: "linear-gradient(110deg, #eb4559 50%, #f78259 50%)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="logo py-3 h-16">
        <span className="text-4xl text-white px-5 font-bold">Vibesville</span>
      </div>
      <div
        className="flex flex-row justify-center items-center main "
        style={{
          width: "100%",
        }}
      >
        <div
          className="image flex justify-center items-center p-5 "
          style={{
            width: "50%",
            height: "91vh",
          }}
          // style={{ height: "calc(100vh - 64px)" }}
        >
          <img
            src="https://raw.githubusercontent.com/Vaibhav-sh27/SongApp-Frontend/38a2291e2ec6187ab7046aae7960f605347782e0/src/components/assets/img/headphones.svg"
            alt="MUSIC"
            className="w-80 h-80 logoimage"
          />
        </div>
        <div
          className="content flex flex-col justify-center items-center font-serif p-5"
          style={{
            width: "50%",
            height: "91vh",

            gap: "0.7rem",
          }}
        >
          <h3 className=" font-semibold text-5xl">Music for everyone</h3>
          <span className="font-medium text-white text-2xl">
            Without music, life would be a mistake
          </span>
          <Link
            className="text-white bg-black p-3 rounded-xl cursor-pointer text-xl hover:bg-slate-700 -tracking-tight hover:scale-110"
            to="/home"
          >
            Start Listening
          </Link>
        </div>
      </div>
    </div>
  );
};

// Vibesville

export default Main;
