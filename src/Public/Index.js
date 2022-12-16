import React from "react";
import Home from "./Home/Home";
import NavigationBar from "./NavFoot/Navbar";
import FooterBar from "./NavFoot/Footbar";
import './Andy.css'
import './Bill.css'
import './Thon.css'
import './Main.css'
import { Routes, Route } from "react-router-dom";
import Store from './Content/Store'
import Contact from "./Content/Contact";
import Repair from './Content/Repair'
export default function Index() {
  return (
    <div>
      <React.StrictMode>
        {/* { location.pathname === "/profile" ||
              location.pathname === "/freelaner" ||
              location.pathname === "/login" ||
              location.pathname === "/employer" ||
              location.pathname === "/account" ||
              location.pathname === "/search" ||
              location.pathname === "/" ? (
              <div>
                {" "}
                <Footer />
              </div>
            ) : null}  */}
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repair" element={<Repair />} />
        </Routes>
        <FooterBar />
      </React.StrictMode>
    </div>
  );
}
