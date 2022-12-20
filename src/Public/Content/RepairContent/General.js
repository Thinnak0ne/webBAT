import React from 'react'
import Img from '../../../img/repair1.png'

export default function General() {
  return (
    // <div className="span">
    //     <div className="ul">ສ້ອມແປງຄອມທົ່ວໄປ</div>
    //     <div className="li">
    //         <img src={Img} alt='' className='IconPStoreT'/>
    //     </div>
    // </div>
    <div className="PStoreBT">
      <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>ບໍລິການສ້ອມແປງທົ່ວໄປ</div>
      <a href='/sendrepair'>
        <div className="BoxIconST">
          <img src={Img} alt="" className="IconPStoreT" />
          <div className="overlayStoreT"></div>
        </div></a>
    </div>
  )
}
