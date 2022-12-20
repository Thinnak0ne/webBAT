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
import CPU from './Content/StoreBottom/Category/CPUc'
import MB from './Content/StoreBottom/Category/Mainboard'
import Sendrepair from './Content/Sendrepair'
export default function Index() {
  const location = useLocation();
  return (
    <div>
      <React.StrictMode>
            { location.pathname === "/contact" ||
              location.pathname === "/support" ||
              location.pathname === "/cause" ||
              location.pathname === "/store"||
              location.pathname === "/cpu" ||
              location.pathname === "/sendrepair" ||
              location.pathname === "/mainboard"   ? (
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
          <Route path="/support" element={<Repair />} />
          <Route path="/cpu" element={<CPU />} />
          <Route path="/mainboard" element={<MB />} />
          <Route path="/sendrepair" element={<Sendrepair/>} />
        </Routes>
        <FooterBar />
      </React.StrictMode>
    </div>
  );
}
