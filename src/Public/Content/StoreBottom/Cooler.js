import React from 'react'

import Icon from "../../../img/cooler.png";
export default function Cooler() {
  return (
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">CPU Cooler</div>
    </div>
  )
}
