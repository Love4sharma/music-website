import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MusicContext } from "../MusicContext";
import axios from "axios";
import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
  const { searchData, searching } = useContext(MusicContext);
  const navigate = useNavigate();
  const [logedin, setLogedIn] = useState(true);
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");
  // Retrieve data from localStorage
  const usersData = localStorage.getItem("user");

  useEffect(() => {
    // Check if data exists
    if (usersData) {
      // Convert the data from JSON to JavaScript object
      const storeduser = JSON.parse(usersData);
      setUser(storeduser);
      setLogedIn(false);
      // Now you can use the 'users' object which contains your data
      // console.log("user data retrieved from localstorage is: ", users);
      // console.log(users);
    } else {
      console.log('No data found in localStorage for key "users".');
    }
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleclick = () => {
    navigate("/home/profile");
  };

  const handlelogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setLogedIn(true);
  };

  const handlechange = (event) => {
    const data = event.target.value.trim();
    setValue(data);
  };

  async function getData() {
    try {
      const res = await axios.post(`http://localhost:8080/search?q=${value}`);
      searching(res.data);
      console.log("search data is");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [value]);

  return (
    <div
      className="z-50 px-8 nav w-full bg-gray-800 h-20 flex  justify-between items-center sticky top-0 left-0"
      style={{
        boxShadow:
          "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
      }}
    >
      <div className="logo py-3 h-16">
        {/* <IoReorderThreeOutline /> */}
        <span className="text-4xl text-white px-5 font-bold cursor-pointer">
          Vibesville
        </span>
      </div>

      <input
        onChange={handlechange}
        value={value}
        type="search"
        placeholder="Search Songs "
        className="text-center items-center outline-none w-60 h-8 rounded-lg hover:scale-125 hover:ease-in duration-300"
      />

      {logedin ? (
        <div className="login text-white ">
          <Link to="/login" className="text-2xl cursor-pointer">
            Login
          </Link>
        </div>
      ) : (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src="https://img.icons8.com/?size=80&id=0lg0kb05hrOz&format=png"
              alt=""
              className="rounded-full border-white border-2 w-9 h-9 drop-shadow-xl scale-150 "
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className="text-black text-xl">{user.name}</MenuItem>
            {/* <MenuItem onClick={handleclick} className="text-black text-xl">
              Profile
            </MenuItem> */}
            <MenuItem onClick={handlelogout} className="text-black text-xl">
              Logout
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
