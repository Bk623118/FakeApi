import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { Provider } from "react-redux";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    cart: productReducer,
    wishlist : wishlistReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
