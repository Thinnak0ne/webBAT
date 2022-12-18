import React from 'react'
import Img from '../../../img/comnets_book.jpg'
export default function CauseData() {
  return (
    <div className='causeMainT'>
        <div>
            <img src={Img} alt='' className='ImgcauseT'/>
        </div>
        <div>
            <div className='dataT'>
                data
            </div>
            <div className='btT'>
                <button className='butCauseT'>ຂໍ້ມູນເພີ່ມເຕີມ</button>
            </div>
        </div>
    </div>
  )
}
