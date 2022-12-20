import React from "react";
import Icon from "../../../img/gpu.png";
export default function GPU() { 
  return (
    <a href={'/gpu'}>
      <div className="PStoreBT">
        <div className="BoxIconST">
          <img src={Icon} alt="" className="IconPStoreT" />
          <div className="overlayStoreT"></div>
        </div>
        <div className="BoxTextStoreT">GPU</div>
      </div>
    </a>
  );
}
