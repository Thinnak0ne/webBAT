import React from 'react'
import Logo from '../../img/Main.png'
export default function Navbar() {

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    //  console.log(document.documentElement.scrollTop)
    var navi = document.documentElement.scrollTop
    if (navi > 780) {
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
      <div className="nav">
          <a href={"/"} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img src={Logo} alt='' style={{ height:'30px' }}/>
          </a>
        </div>
        <div className="nav">
          <a href={"/store"} style={{color:'white'}}>
            ສິນຄ້າ
          </a>
        </div>
        <div className="nav">
          <a href={"/repair"} style={{color:'white'}}>
            ສ້ອມແປງ
          </a>
        </div>
        <div className="nav">
          <a href={"/cause"} style={{color:'white'}}>
            ຄອສ
          </a>
        </div>
        <div className="nav">
          <a href={"/contact"} style={{color:'white'}}>
            ຕິດຕໍ່ພວກເຮົາ
          </a>
        </div>
    </div>
  )
}
