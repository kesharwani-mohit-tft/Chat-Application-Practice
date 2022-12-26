import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { io } from "socket.io-client";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatboard from "./pages/Chatboard";

const socket = io.connect("http://localhost:3000");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/chatboard" element={<Chatboard socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
