import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/home/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response from server:", response.data);

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  }

  return (
    <div>
      <div
        className="w-screen gap-3 h-screen flex-col  flex items-center justify-center "
        style={{
          backgroundImage: `url( 'https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg?auto=compress&cs=tinysrgb&w=600' )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl text-white">Sign Up</h1>
        <form
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          className="login border-red border-4 rounded-lg w-96 h-96 bg-transparent flex flex-col items-center gap-5 justify-center"
          onSubmit={submitHandler}
        >
          <div className="flex gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={user.name}
              className="w-15"
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              required
              className="w-15"
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-15"
              value={user.password}
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="Submit"
            className="w-44 h-10 bg-blue-900 text-white text-2xl hover:scale-105 ease-in duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
