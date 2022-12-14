import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.color = '#d3dbde';
      document.getElementById("navbar").style.backgroundColor = "#000";


    } else {
      document.getElementById("navbar").style.color = '#d3dbde';
      document.getElementById("navbar").style.backgroundColor = "#282931";

    }
  }
  return (
    <div id="navbar">
      <div className='nav' >ໜ້າຫຼັກ</div>
      <div className='nav' >ສິນຄ້າ</div>
      <div className='nav' >ບໍລິການອື່ນໆ</div>
      <div className='nav' >ກ່ຽວກັບພວກເຮົາ</div>
      <div className='nav' >ຕິດຕໍ່ພວກເຮົາ</div>
    </div>
  )
}
