import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../slices/authSlice";
import Cookies from "js-cookie";
import { ROUTES } from "../../utils/constants";
import { logoutUser } from "../../services/operations/authAPI";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  if(token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000;

    if (Date.now() >= expirationTime) {
      dispatch(logoutUser());
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      dispatch(setToken(null));
    }
  }
  return token ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
