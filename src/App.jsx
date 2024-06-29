import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAccount from "./pages/LoginAccount";

function App() {

  return (
    <>
    <Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/login" element={<LoginAccount/>}/>
    </Routes>
      {/* <Reward /> */}
      {/* <Leaderboard /> */}
      {/* <AddItem /> */}
      {/* <LoginPage /> */}
      {/* <HomePage/> */}
        
    </>
  )
}

export default App
