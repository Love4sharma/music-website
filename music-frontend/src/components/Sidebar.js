import React, { useContext } from "react";
import "../App.css";
import { MusicContext } from "../MusicContext";
const Sidebar = () => {
  const { changeCategory } = useContext(MusicContext);
  const token = localStorage.getItem("token");
  function handleclick(category) {
    changeCategory(category);
  }
  return (
    <div
      className="sidebarcontainer font-serif flex flex-col flex-1 bg-gray-800 w-56 h-[87vh] position-sticky left-0 top-24 gap-5 pt-6 text-white text-xl"
      style={{
        boxShadow:
          "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
      }}
    >
      <div className="upper flex flex-col gap-3">
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() => handleclick("http://localhost:8080/home")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/10542/10542477.png"
            alt=""
            className="icons"
          />
          <span>Home</span>
        </div>
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick(
              `http://localhost:8080/getRecentlyPlayed?token=${token}`
            )
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>HISTORY</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-4">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/128/3038/3038089.png"
          alt=""
        />
        <span className="text-xl">PlayList</span>
      </div>
      <hr />
      <div className="category flex flex-col gap-4">
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick(`http://localhost:8080/getFavourites?token=${token}`)
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>FAVOURITE</span>
        </div>

        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick("http://localhost:8080/home/playlist/Romantic")
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>ROMANTIC</span>
        </div>

        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick("http://localhost:8080/home/playlist/english")
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>ENGLISH</span>
        </div>
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick("http://localhost:8080/home/playlist/bollywood")
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>BOLLYWOOD</span>
        </div>
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick("http://localhost:8080/home/playlist/bhakti")
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>BHAKTI</span>
        </div>
        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() => handleclick("http://localhost:8080/home/playlist/pop")}
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>POP</span>
        </div>

        <div
          className="flex flex-row gap-4 cursor-pointer"
          onClick={() =>
            handleclick("http://localhost:8080/home/playlist/punjabi")
          }
        >
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/128/3844/3844724.png"
            alt=""
          />
          <span>PUNJABI</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
