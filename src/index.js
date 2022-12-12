import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import Test from "./Test00";
//import App from "./App";
import Public from "./Public/Index";

// import Home from './Public/Home'


import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Public/>} />
    </Routes>
  </BrowserRouter>
);


