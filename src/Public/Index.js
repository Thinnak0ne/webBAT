import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home/Home";
import NavigationBar from "./NavFoot/Navbar";
import FooterBar from "./NavFoot/Footbar";
import NavWOH from "./NavFoot/NavWithoutH";
import './Andy.css'
import './Bill.css'
import './Thon.css'
import './Main.css'
import { Routes, Route } from "react-router-dom";
import Store from './Content/Store'
import Contact from "./Content/Contact";
import Repair from './Content/Repair'
import Cause from './Content/Cause'
export default function Index() {
  const location = useLocation();
  return (
    <div>
      <React.StrictMode>
            { location.pathname === "/contact" ||
              location.pathname === "/repair" ||
              location.pathname === "/store"   ? (
              <div>
                <NavWOH/>
              </div>
            ) : null}
            { location.pathname === "/"  ? (
              <div>
                <NavigationBar />
              </div>
            ) : null} 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cause" element={<Cause />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repair" element={<Repair />} />
        </Routes>
        <FooterBar />
      </React.StrictMode>
    </div>
  );
}
