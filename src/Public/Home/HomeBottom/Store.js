import React from "react";

import Icon from '../../../img/Background.png'
export default function Store() {
  return (
    <div className="BoxT">
      <div>
        <div className="containerIconT">
          <img alt='' src={Icon} className="IconHomeT"/>
          <div className="overlay"></div>
        </div>
      </div>
      <div className="TextT">Store</div>
    </div>
  );
}
