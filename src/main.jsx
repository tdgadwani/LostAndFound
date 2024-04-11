import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/index.js';
import { Toaster } from "react-hot-toast";

const store = configureStore({
    reducer: rootReducer,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <Toaster/>
    </Provider>
  </React.StrictMode>
)
