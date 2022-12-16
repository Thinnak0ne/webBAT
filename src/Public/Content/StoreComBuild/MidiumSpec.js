import React from 'react'
import Img from "../../../img/HighBuild.png";

export default function MidiumSpec() {
  return (
    <div className="SPCboxStoreT">
      <div className="ImgPositionStoreT">
        <img alt="" src={Img} className="ImgPCStoreT" />
      </div>
      <div className="TextSPCStoreT">
        <div>
          <div>CPU:Ryzen7/Intel Core i7</div>
          <div>GPU:RTX 3070</div>
          <div>RAM:32 GB</div>
          <div>Storage:2 TB SSD</div>
          <div className="empty20pxT"></div>
          <div className="BottomSPCStoreT">Starting price:4300$</div>
        </div>
      </div>
    </div>
  )
}
