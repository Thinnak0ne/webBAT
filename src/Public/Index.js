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
import Ram from './Content/StoreBottom/Category/Ram'
import GPU from './Content/StoreBottom/Category/GPU'
import PSP from './Content/StoreBottom/Category/PSP'
export default function Index() {
  const location = useLocation();
  return (
    <div>
      <React.StrictMode>
            { location.pathname === "/contact" ||
              location.pathname === "/repair" ||
              location.pathname === "/cause" ||
              location.pathname === "/store"||
              location.pathname === "/cpu" ||
              location.pathname === "/mainboard" ||
              location.pathname === "/ram" ||
              location.pathname === "/gpu" ||
              location.pathname === "/powersupply"  ? (
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
          <Route path="/cpu" element={<CPU />} />
          <Route path="/mainboard" element={<MB />} />
          <Route path="/ram" element={<Ram />} />
          <Route path="/gpu" element={<GPU />} />
          <Route path="/powersupply" element={<PSP />} />
        </Routes>
        <FooterBar />
      </React.StrictMode>
    </div>
  );
}
