import React from 'react'
import Icon from "../../../img/psp.png";

export default function PSP() {
  return (
    <a href={'/powersupply'}>
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">Power Supply</div>
    </div>
    </a>
  )
}
