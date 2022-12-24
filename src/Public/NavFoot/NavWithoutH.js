import React from "react";
import Logo from '../../img/Main.png'

export default function NavWithoutH() {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    //  console.log(document.documentElement.scrollTop)
    var navi = document.documentElement.scrollTop;
    if (navi > 1) {
      document.getElementById("NavBarT").style.opacity = 100;
      document.getElementById("NavBarT").style.backgroundColor = "#FF8801";
      document.getElementById("NavBarT").style.borderColor = "#fff";
    } else {
      document.getElementById("NavBarT").style.opacity = 100;
      document.getElementById("NavBarT").style.backgroundColor = null;
    }
  }
  return (
    <div>
      <div id="NavBarT">
        <div className="nav">
          <a href={"/"} className="textT" style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <img src={Logo} alt='' style={{ height:'30px' }}/>
          </a>
        </div>
        <div className="nav">
          <a href={"/"} className="textT">
            ໜ້າຫຼັກ
          </a>
        </div>
        <div className="nav">
          <a href={"/store"} className="textT">
            ສິນຄ້າ
          </a>
        </div>
        <div className="nav">
          <a href={"/repair"} className="textT">
            ສ້ອມແປງ
          </a>
        </div>
        <div className="nav">
          <a href={"/cause"} className="textT">
            ຄອສ
          </a>
        </div>
        <div className="nav">
          <a href={"/contact"} className="textT">
            ຕິດຕໍ່ພວກເຮົາ
          </a>
        </div>
        <div className="nav">
          <a href={"/about"} className="textT">
            ກ່ຽວກັບພວກເຮົາ
          </a>
        </div>
      </div>
      <div className="empty50pxT"></div>
      <div className="NavColorT"></div>
    </div>
  );
}
