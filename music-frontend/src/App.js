import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App bg-black">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;
