import React from "react";

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
          <a href={"/store"} className="textT">
            ມືຖື
          </a>
        </div>
        <div className="nav">
          <a href={"/contact"} className="textT">
            ຕິດຕໍ່ພວກເຮົາ
          </a>
        </div>
      </div>
      <div className="empty50pxT"></div>
      <div className="NavColorT"></div>
    </div>
  );
}
