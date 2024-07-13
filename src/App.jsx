import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAccount from "./pages/LoginAccount";
import CreateAccount from "./pages/CreateAccount";
import PrivateRoute from "./components/Auth/PrivateRoute";
import OpenRoute from "./components/Auth/OpenRoute";
import { useSelector } from "react-redux";
import AddItem from "./pages/AddItemPage";
import EditProfile from "./pages/EditProfilePage";
import AllItems from "./pages/AllItems.jsx";

import ItemCard from "./components/ItemCard.jsx";
import ItemList from "./components/ItemList.jsx";
import Reward from "./pages/Reward.jsx";
import AddItemPage from "./pages/AddItemPage.jsx"
import Test from "./components/Test.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
function App() {
 
  return (
    <>      
      {/* <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
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
          path="/reset-password"
          element={
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <OpenRoute>
              <ResetPassword/>
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
        <Route
          path="/additem"
          element={
            <PrivateRoute>
              <AddItem />
            </PrivateRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/lostitems"
          element={
            <PrivateRoute>
              <AllItems itemType={"Lost"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/founditems"
          element={
            <PrivateRoute>
              <AllItems itemType={"Found"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/claimedtems"
          element={
            <PrivateRoute>
              <AllItems itemType={"Claimed"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/rewards"
          element={
            <PrivateRoute>
              <Reward/>
            </PrivateRoute>
          }
        />
      </Routes>  */}
      {/* <Home/> */}
      {/* <ItemCard/> */}
      <AllItems  itemType={"Lost"}/>
      {/* <AddItemPage></AddItemPage> */}
      {/* <Test/> */}
      {/* <LoginAccount/> */}
      {/* <CreateAccount/> */}
      {/* <EditProfile/> */}
      
      {/* <AllItems></AllItems> */}
    </>
  );
}

export default App;
