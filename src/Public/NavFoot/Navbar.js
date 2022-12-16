import React from 'react'

export default function Navbar() {

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    //  console.log(document.documentElement.scrollTop)
    var navi = document.documentElement.scrollTop
    if (navi > 800) {
      document.getElementById("navbar").style.opacity= 100;
      document.getElementById("navbar").style.color = '#d3dbde';
      document.getElementById("navbar").style.backgroundColor = "#000";
    } 
    else {
      document.getElementById("navbar").style.opacity= 0;
      document.getElementById("navbar").style.backgroundColor = "unset ";
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
