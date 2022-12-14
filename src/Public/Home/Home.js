import React from 'react'
import Img1 from '../../img/FusionChart_Suite_Romania.png'

export default function Home() {
  var ReactRotatingText = require('react-rotating-text');
  return (

    <div className='headhomeB'>
      <div className='mainbodyhomeB'>
        <div className='ulHomeB'>
          <ul className='txtHome1'>
            {/* <h1 >Welcome To Mystore</h1>
            <h2>Hello</h2> */}
            <h1>Welcome To <ReactRotatingText items={['Mystore', 'Your World!']}/></h1>
          </ul>
          <img src={Img1} className="ImgB" />
        </div>
        <div className='containHomeT'>
          <div className='disJustT'>
            Store
          </div>
          <div className='disJustT'>
            Fix
          </div>
          <div className='disJustT'>
            Mobile
          </div>
          <div className='disJustT'>
            Contract
          </div>
        </div>
      </div>

    </div>
  )
}
