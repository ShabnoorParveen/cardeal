import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Signup from "./components/signup/SignUp";
import Login from "./components/login/Login";
import MainPage from "./components/home/MainPage";

function App() {
  const handleSignup = (username, password, email) => {
    console.log(`New user signed up with username ${username}, password ${password}, and email ${email}`);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;