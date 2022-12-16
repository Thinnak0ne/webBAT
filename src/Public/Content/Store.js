import React from "react";
import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Grid";

import CPU from "./StoreBottom/CPU";
import MB from "./StoreBottom/Mainboard";
import Ram from "./StoreBottom/Ram";
import GPU from "./StoreBottom/GPU";
import PSP from "./StoreBottom/PSP";
import Cooler from "./StoreBottom/Cooler";
import Storage from "./StoreBottom/Storage";
import Case from "./StoreBottom/Case";
import Monitor from "./StoreBottom/Monitor";
import OS from "./StoreBottom/OS";

import HighSpec from "./StoreComBuild/HighSpec";
import MidiumSpec from "./StoreComBuild/MidiumSpec";
import LowSpec from "./StoreComBuild/LowSpec";

export default function Store() {
  const build = [
    {
      id: 1,
      bd: <HighSpec />,
    },
    {
      id: 2,
      bd: <MidiumSpec />,
    },
    {
      id: 3,
      bd: <LowSpec />,
    },
  ];
  const brand = [
    {
      id: 1,
      name: <CPU />,
    },
    {
      id: 2,
      name: <MB />,
    },
    {
      id: 3,
      name: <Ram />,
    },
    {
      id: 4,
      name: <GPU />,
    },
    {
      id: 5,
      name: <PSP />,
    },
    {
      id: 6,
      name: <Cooler />,
    },
    {
      id: 7,
      name: <Storage />,
    },
    {
      id: 8,
      name: <Case />,
    },
    {
      id: 9,
      name: <Monitor />,
    },
    {
      id: 10,
      name: <OS />,
    },
  ];
  return (
    <div className="disJustT">
      <div className="MainStoreT">
        {/* advert */}
        <div className="emptyFNavT"></div>
        <div className="AdvertStoreT"></div>
        {/* product */}
        <div className="TextStoreT">
          Choose <br /> your brand
        </div>
        <div className="disJustT">
          <div className="ProductStoreT">
            <Carousel
              cols={5}
              rows={2}
              gap={20}
              responsiveLayout={[
                {
                  breakpoint: 1000,
                  cols: 4,
                  rows: 2,
                },
                {
                  breakpoint: 800,
                  cols: 3,
                  rows: 2,
                },
                {
                  breakpoint: 600,
                  cols: 2,
                  rows: 2,
                },
              ]}
              mobileBreakpoint={390}
              style={{ display: "flex", justifyContent: "center" }}
              loop
            >
              {brand.map((ref) => (
                <Carousel.Item key={ref.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    {ref.name}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="TextStoreT">
          Choose <br /> your build
        </div>
        <div className="disJustT">
          <div className="ProductStoreT">
            <Grid container spacing={3}>
              {build.map((gd) => (
                <Grid item xs={12} sm={6} md={4} key={gd.id}>
                  <div className="disJustT">{gd.bd}</div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
