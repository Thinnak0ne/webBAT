import React from "react";
import General from "./RepairContent/General";
import Img from "../../img/message2.png"


export default function Repair() {
  return (
    <div className="headhomeB2">
      <div className="bodyRB">
        <span className="txtRB">ບໍລິການສ້ອມແປງ</span>
        <div className="CategoryB">
          <General />
          <General />
          <General />
          <General />
          <General />
          <General />
          <General />
          <General />
        </div>
        <div className="repaiconB">
          <div className="containerB">
            <div className="imagB">
              <img src={Img} className="ImgB4" alt="img" />
            </div>
            <div className="textB">
              <h1>ພວກເຮົາຮັບໃຫ້ຄຳປຶກສາກ່ຽວກັບການສ້ອມແປງອຸປະກອນຕ່າງໆ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
