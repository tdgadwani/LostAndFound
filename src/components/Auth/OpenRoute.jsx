import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OpenRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  return !token ? children : <Navigate to="/" />;
};

export default OpenRoute;
