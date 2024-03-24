import React from "react";
import { Link } from "react-router-dom";
import "./CSS/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="library">
        <h4 id="libraries">LIBRARY</h4>

        <div className="tags">
          <Link to="/home" className="link">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15031/15031157.png"
              alt=""
            />
            Home
          </Link>
          <Link to="/search" className="link">
            <img
              src="https://cdn-icons-png.flaticon.com/128/14627/14627692.png"
              alt=""
            />
            Search
          </Link>
        </div>
      </div>

      <div className="playlists">
        <h4>PLAYLISTS</h4>
        <div className="tags2">
          <Link className="link" to="/home/history">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            HISTORY
          </Link>
          <Link className="link" to="/home/favourites">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            FAVOURITE
          </Link>
          <Link className="link" to="/home/playlist/english">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            ENGLISH
          </Link>
          <Link className="link" to="/home/playlist/bollywood">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            BOLLYWOOD
          </Link>
          <Link className="link" to="/home/playlist/bhakti">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            BHAKTI
          </Link>
          <Link className="link" to="/home/playlist/pop">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            POP
          </Link>
          <Link className="link" to="/home/playlist/sad">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            SAD
          </Link>
          <Link className="link" to="/home/playlist/romantic">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            ROMANTIC
          </Link>
          <Link className="link" to="/home/playlist/punjabi">
            <img
              src="https://img.icons8.com/?size=24&id=85623&format=png"
              alt=""
            />
            PUNJABI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
