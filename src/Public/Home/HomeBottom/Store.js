import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from '../../../img/Background.png'
export default function Store() {
  const navigate = useNavigate();
  const handleClickOpen = () => {
    navigate("/store");
  };
  return (
    <div className="BoxT" onClick={handleClickOpen}>
      <div>
        <div className="containerIconT">
          <img alt='' src={Icon} className="IconHomeT"/>
          <div className="overlayT"></div>
        </div>
      </div>
      <div className="TextT">ສິນຄ້າ</div>
    </div>
  );
}
