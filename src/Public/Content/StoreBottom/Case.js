import React from 'react'
import Icon from "../../../img/case.png";

export default function Case() {
  return (
    <div className="PStoreBT">
      <div className="BoxIconST">
        <img src={Icon} alt="" className="IconPStoreT" />
        <div className="overlayStoreT"></div>
      </div>
      <div className="BoxTextStoreT">Case</div>
    </div>
  )
}
