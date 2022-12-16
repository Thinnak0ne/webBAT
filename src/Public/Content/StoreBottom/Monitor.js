import React from 'react'
import Icon from "../../../img/monitor.png";
export default function Monitor() {
  return (
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">Monitor</div>
    </div>
  )
}
