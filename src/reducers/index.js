import authSlice from "../slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
