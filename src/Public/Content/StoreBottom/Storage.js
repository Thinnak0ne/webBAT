import React from 'react'
import Icon from "../../../img/storage.png";

export default function Storage() {
  return (
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">Storage</div>
    </div>
  )
}
