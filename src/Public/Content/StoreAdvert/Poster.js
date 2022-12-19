import React from "react";

import Poster1 from "../../../img/Poster1.png";
import Poster2 from "../../../img/Poster2.png";
import Poster3 from "../../../img/Poster3.png";
import Poster4 from "../../../img/Poster4.png";
import Poster5 from "../../../img/Poster5.png";

import Slider from "infinite-react-carousel";

export default function Poster() {

  return (
    <div>
      <Slider
        autoplay={true}
        arrows={false}
        autoplaySpeed={5000}
        duration={1000}
        shift={0}
        loop={true}
      >
        <div >
          <img src={Poster1} alt="" className="posterStoreT" />
        </div>
        <div >
          <img src={Poster2} alt="" className="posterStoreT" />
        </div>
        <div >
          <img src={Poster3} alt="" className="posterStoreT" />
        </div>
        <div >
          <img src={Poster4} alt="" className="posterStoreT" />
        </div>
        <div >
          <img src={Poster5} alt="" className="posterStoreT" />
        </div>
      </Slider>
    </div>
  );
}
