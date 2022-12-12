import React from "react";
import Home from "./Home/Home";
import './Andy.css'
import './Bill.css'
import './Thon.css'
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
