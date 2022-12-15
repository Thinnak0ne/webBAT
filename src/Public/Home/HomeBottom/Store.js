import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
export default function Store() {
  return (
    <div className="BoxT">
      <div>
        <div class="containerIconT">
          <LocalGroceryStoreIcon class="IconHomeT" />
          <div class="overlay"></div>
        </div>
      </div>
      <div className="TextT">Store</div>
    </div>
  );
}
