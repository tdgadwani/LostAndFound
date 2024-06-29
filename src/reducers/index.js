import authSlice from "../slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import foundItemSlice from "../slices/foundItemSlice";
import lostItemSlice from "../slices/lostItemSlice";
import claimedItemSlice from "../slices/claimedItemSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  lostItems: lostItemSlice,
  foundItems: foundItemSlice,
  claimedItems: claimedItemSlice,
});

export default rootReducer;
