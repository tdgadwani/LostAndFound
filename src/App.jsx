import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAccount from "./pages/LoginAccount";
import Item from "./components/ItemCard";
import CreateAccount from "./pages/CreateAccount";
import AddItem from "./pages/AddItemPage";
import EditProfile from "./pages/EditProfilePage";
import Leaderboard from "./pages/Leaderboard";
import Reward from "./pages/Reward";
import ItemCard from "./components/ItemCard";
import OpenRoute from "./components/Auth/OpenRoute";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const { userData } = useSelector((store) => store.auth);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home userName={userData} />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <LoginAccount />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <CreateAccount />
            </OpenRoute>
          }
        />
      </Routes>
      {/* <Reward /> */}
      {/* <Leaderboard /> */}
      {/* <AddItem /> */}
      {/* <LoginPage /> */}
      {/* <HomePage/> */}
      {/* <Item /> */}
    </>
  );
}

export default App;
