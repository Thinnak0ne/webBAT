import React from "react";
import Icon from "../../../img/cpu.png";
export default function CPU() {
  return (
    <a href={'/cpu'}>
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">CPU</div>
    </div>
    </a>
  );
}
