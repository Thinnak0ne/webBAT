import React from "react";
import Img1 from "../../img/7.png";
import Carousel from "react-grid-carousel";
import StoreB from './HomeBottom/Store'
import Fix from './HomeBottom/Fix'
import Mobile from './HomeBottom/Mobile'
import Contact from './HomeBottom/Contact'
import Img2 from "../../img/FusionChart_Suite_Romania.png";
import Img3 from "../../img/2.png";
import Img4 from "../../img/3.png";


export default function Home() {
  var ReactRotatingText = require("react-rotating-text");
  return (
    <div className="headhomeB">
      <div className="mainbodyhomeB">
        <div className="ulHomeB">
          <ul className="txtHome1">
            <h1>
              Welcome To {''}
              <ReactRotatingText items={["Mystore", "Your World!"]} />
            </h1>
            <h3>ເລືອກໃນສິ່ງທີ່ທ່ານຕ້ອງການ ສ້າງຄວາມເປັນທ່ານ <br /> ດ້ວຍຕົວຂອງທ່ານເອງ</h3>
          </ul>
          <img alt="" src={Img1} className="ImgB" />
        </div>
        <div className="containHomeT">
          <Carousel
            cols={4}
            rows={1}
            gap={20}
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 3,
                rows: 2,
              },
              {
                breakpoint: 920,
                cols: 2,
                rows: 2,
              },
              {
                breakpoint: 620,
                cols: 1,
                rows: 4,
              },
            ]}
            mobileBreakpoint={390}
            style={{ display: "flex", justifyContent: "center" }}

          >
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
                <a href={'/store'}>
                  <StoreB />
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
                <Fix />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
                <Mobile />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ display: "flex", justifyContent: "center", padding: '10px' }}>
                <Contact />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="containHomeT">
          <div className="containerB">
            <div className="textB">
              <h1>Paris is one of the most magnificient cities in France.</h1>
            </div>
            <div className="imagB">
              <img src={Img2} className="ImgB" />
            </div>
          </div>
        </div>
        <div className="containHomeT">
          <div className="containerB">
            <div className="imagB">
              <img src={Img3} className="ImgB" />
            </div>
            <div className="textB">
              <h1>Paris is one of the most magnificient cities in France.</h1>
            </div>
          </div>
        </div>
        <div className="containHomeT">
          <div className="containerB">
            <div className="textB">
              <h1>Paris is one of the most magnificient cities in France.</h1>
            </div>
            <div className="imagB">
              <img src={Img4} className="ImgB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
