import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Songs from "./Songs";
import "./CSS/home.css";
const Home = () => {
  return (
    <div className="maincontainer">
      {/* <div className="nav"> */}
      <Navbar></Navbar>
      {/* </div> */}

      <div className="songsContainer">
        <div className="sidebarContainer ">
          <Sidebar></Sidebar>
        </div>

        <div className="songs-box">
          <Songs></Songs>
        </div>
      </div>
    </div>
  );
};

export default Home;
