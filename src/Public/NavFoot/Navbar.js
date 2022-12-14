import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.color = 'white';
      document.getElementById("navbar").style.backgroundColor = "#3d4143";
      document.getElementById("navbar").style.padding = "5px 5px";

    } else {
      document.getElementById("navbar").style.color = '#d3dbde';
      document.getElementById("navbar").style.backgroundColor = "#041014";
      document.getElementById("navbar").style.padding = "10px 10px";
    }
  }
  return (
    <div id="navbar">
      <div className='nav' >ໜ້າຫຼັກ</div>
      <div className='nav' >ສິນຄ້າ</div>
      <div className='nav' >ບໍລິການອື່ນໆ</div>
      <div className='nav' >ກ່ຽວກັບພວກເຮົາ</div>
    </div>
  )
}
