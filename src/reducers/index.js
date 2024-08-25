
import authSlice from "../slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import foundItemSlice from "../slices/foundItemSlice";
import lostItemSlice from "../slices/lostItemSlice";
import claimedItemSlice from "../slices/claimedItemSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import notificationSlice from "../slices/notificationSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  lostItem: lostItemSlice.reducer,
  foundItems: foundItemSlice.reducer,
  claimedItems: claimedItemSlice.reducer,
  notification:notificationSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;
