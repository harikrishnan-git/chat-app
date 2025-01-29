import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/login" element={authUser ? <Home /> : <Login />} />
        <Route path="/signup" element={authUser ? <Home /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
