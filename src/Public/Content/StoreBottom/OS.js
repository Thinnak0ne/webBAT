import React from 'react'
import Icon from "../../../img/os.png";
export default function OS() {
  return (
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">OS</div>
    </div>
  )
}
