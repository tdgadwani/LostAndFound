import authSlice from "../slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import foundItemSlice from "../slices/foundItemSlice";
import lostItemSlice from "../slices/lostItemSlice";
import claimedItemSlice from "../slices/claimedItemSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authSlice,
  lostItems: lostItemSlice,
  foundItems: foundItemSlice,
  claimedItems: claimedItemSlice,
});

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;
