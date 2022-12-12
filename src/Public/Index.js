import React from "react";
import Home from "./Home/Home";
import './style.css'
import { Routes, Route } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
