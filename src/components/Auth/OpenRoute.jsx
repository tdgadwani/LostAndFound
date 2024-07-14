import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../utils/constants";

const OpenRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  return !token ? children : <Navigate to={ROUTES.HOME} />;
};

export default OpenRoute;
