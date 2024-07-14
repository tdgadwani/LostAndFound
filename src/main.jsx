import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./reducers/index.js"
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: persistedReducer,
},applyMiddleware(thunk));

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
