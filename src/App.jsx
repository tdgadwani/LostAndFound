import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAccount from "./pages/LoginAccount";
import CreateAccount from "./pages/CreateAccout";

function App() {

  return (
    <>
    <Routes>
		<Route path="/" element={<CreateAccount/>} />
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
