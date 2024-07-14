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
import { ROUTES } from "./utils/constants.js";
function App() {
 
  return (
    <>      
       <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <OpenRoute>
              <LoginAccount />
            </OpenRoute>
          }
        />
        <Route
          path={ROUTES.RESETPASSWORD}
          element={
            <OpenRoute>
              <ForgotPassword/>
            </OpenRoute>
          }
        />
        <Route
          path={ROUTES.RESETPASSWORTOKEN}
          element={
            <OpenRoute>
              <ResetPassword/>
            </OpenRoute>
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            <OpenRoute>
              <CreateAccount />
            </OpenRoute>
          }
        />
        <Route
          path={ROUTES.ADDITEM}
          element={
            <PrivateRoute>
              <AddItem />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.EDITPROFILE}
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.LOSTITEMS}
          element={
            <PrivateRoute>
              <AllItems itemType={"Lost"} />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.FOUNDITEMS}
          element={
            <PrivateRoute>
              <AllItems itemType={"Found"} />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.CLAIMEDITEMS}
          element={
            <PrivateRoute>
              <AllItems itemType={"Claimed"} />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.REWARDS}
          element={
            <PrivateRoute>
              <Reward/>
            </PrivateRoute>
          }
        />
      </Routes> 

    </>
  );
}

export default App;
