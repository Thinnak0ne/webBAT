import React from "react";
import Home from "./Home/Home";
import NavigationBar from "./NavFoot/Navbar";
import './Andy.css'
import './Bill.css'
import './Thon.css'
import './Main.css'
import { Routes, Route } from "react-router-dom";
import Store from './Content/Store'
import Contact from "./Content/Contact";
export default function Index() {
  return (
    <div>
      <React.StrictMode>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}
