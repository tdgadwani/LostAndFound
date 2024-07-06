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

function App() {
  const { userData } = useSelector((store) => store.auth);
  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home userName={userData?.email} />
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
        <Route
          path="/additem"
          element={
            <PrivateRoute>
              <AddItem/>
            </PrivateRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <PrivateRoute>
              <EditProfile/>
            </PrivateRoute>
          }
        />
      </Routes>
      </Routes> */}
      {/* <CreateAccount /> */}
      <LoginAccount />
    </>
  );
}

export default App;
