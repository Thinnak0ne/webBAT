import React from 'react'
import Icon from "../../../img/ram.png";
export default function Ram() {
  return (
    <div><div className="PStoreBT">
    <div className="BoxIconST">
      <img src={Icon} alt="" className="IconPStoreT" />
      <div className="overlayStoreT"></div>
    </div>
    <div className="BoxTextStoreT">RAM</div>
  </div></div>
  )
}
