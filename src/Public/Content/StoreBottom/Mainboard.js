import React from "react";
import Icon from "../../../img/mainboard.png";

export default function Mainboard() {
  return (
    <a href={'/mainboard'}>
      <div className="PStoreBT">
        <div className="BoxIconST">
          <img src={Icon} alt="" className="IconPStoreT" />
          <div className="overlayStoreT"></div>
        </div>
        <div className="BoxTextStoreT">Mainboard</div>
      </div>
    </a>
  );
}
