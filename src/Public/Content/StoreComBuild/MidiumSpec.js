import React from 'react'
import Img from "../../../img/MidiumSpec.png";

export default function MidiumSpec() {
  return (
    <div className="SPCboxStoreT">
      <div className="ImgPositionStoreT">
        <img alt="" src={Img} className="ImgPCStoreT" />
      </div>
      <div className="TextSPCStoreT">
        <div>
          <div>CPU:Ryzen5/Intel Core i5</div>
          <div>GPU:RTX 3050</div>
          <div>RAM:16 GB</div>
          <div>Storage:1 TB SSD</div>
          <div className="empty20pxT"></div>
          <div className="BottomSPCStoreT">Starting price:2000$</div>
        </div>
      </div>
    </div>
  )
}
