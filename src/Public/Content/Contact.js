import React from 'react'

import Thon from '../../img/thon.jpg'
import Binly from '../../img/binly.jpg'
import Fon from '../../img/fon.jpg'
import Andy from '../../img/andy.jpg'


export default function Contact() {
    return (
        <div>
            <div className='HeaderA'>
                <h1>Contact us</h1>
            </div>

            <div className='CenterA'>
                <div className='RectanglerightA'>
                    <div className='CirclerightA'>

                        <img src={Thon} alt='' className='ImgTestT'/>

                    </div>
                    <div className='Text2A'>
                        Mr. Thinnakone Khotsimeuan
                        <br/>
                        Facebook:
                        <br/>
                        Email:
                        <br/>
                        Phone:
                    </div>
                </div>
            </div>

            <div style={{ padding: '40px' }}></div>

            <div className='CenterA'>
                <div className='RectangleleftA'>
                    <div className='Text2A'>
                        Mr. Thipphasone Chunthabundithz
                        <br/>
                        Facebook:
                        <br/>
                        Email:
                        <br/>
                        Phone:
                    </div>
                    <div className='CirclerightA'>
                    <img src={Binly} alt='' className='ImgTestT'/>
                    </div>
                </div>
            </div>

            <div style={{ padding: '40px' }}></div>

            <div className='CenterA'>
                <div className='RectanglerightA'>
                    <div className='CirclerightA'><img src={Fon} alt='' className='ImgTestT'/></div>

                    <div className='Text2A'>
                        Ms. Souphaphone Houatthongkham
                        <br/>
                        Facebook:
                        <br/>
                        Email:
                        <br/>
                        Phone:

                    </div>
                </div>
            </div>

            <div style={{ padding: '40px' }}></div>

            <div className='CenterA'>
                <div className='RectangleleftA'>
                    <div className='Text2A'>
                        Mr. Phonesavanh Keonouchanh
                        <br/>
                        Facebook:
                        <br/>
                        Email:
                        <br/>
                        Phone:
                    </div>
                    <div className='CirclerightA'>
                    <img src={Andy} alt='' className='ImgTestT'/>
                    </div>
                </div>
            </div>

            <div style={{ padding: '40px' }}></div>

        </div>
    )
}
