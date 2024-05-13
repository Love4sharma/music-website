import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
        "http://localhost:8080/home/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // console.log(response.data.data.user);
        const { token, user } = response.data.data;
        // console.log("Token:", token);
        // console.log("User details:", user);

        const userjson = JSON.stringify(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", userjson);
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");

        navigate("/home");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div
      className="w-screen gap-3 h-screen flex-col  flex items-center justify-center "
      style={{
        backgroundImage: `url( 'https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg?auto=compress&cs=tinysrgb&w=600' )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl text-white">Login</h1>
      <form
        onSubmit={submitHandler}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="login border-red border-4 rounded-lg w-96 h-96 bg-transparent flex flex-col items-center gap-5 justify-center"
      >
        <div className="flex gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
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
            className="w-15"
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
      <p className="text-lg">
        Don't have an account ?
        <Link to="/signup" className="text-blue-950 text-xl">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;
