import React from 'react'
import Img from "../../../img/LowSpec.png";

export default function RowSpec() {
  return (
    <div className="SPCboxStoreT">
      <div className="ImgPositionStoreT">
        <img alt="" src={Img} className="ImgPCStoreT" />
      </div>
      <div className="TextSPCStoreT">
        <div>
          <div>CPU:Ryzen3/Intel Core i3</div>
          <div>GPU: GTX 1650</div>
          <div>RAM:4 GB</div>
          <div>Storage:1 TB HDD</div>
          <div className="empty20pxT"></div>
          <div className="BottomSPCStoreT">Starting price:500$</div>
        </div>
      </div>
    </div>
  )
}
