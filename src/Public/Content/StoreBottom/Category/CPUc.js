import React from "react";

import RY3 from "../../../../img/ryzen3.png";
import RY5 from "../../../../img/ryzen5.png";
import RY7 from "../../../../img/ryzen7.png";
import RY9 from "../../../../img/ryzen9.png";
import I3 from "../../../../img/intel3.png";
import I5 from "../../../../img/intel5.png";
import I7 from "../../../../img/intel7.png";
import I9 from "../../../../img/intel9.png";

import Grid from "@mui/material/Grid";
export default function CPUc() {
    const dataCPU = [
        {
            id:1,
            cpu:<img src={RY3} alt="" className="CpuImgT" />,
            series:'AMD Ryzen 3 4100',
            price:'4,150.-'
        },
        {
            id:2,
            cpu:<img src={RY5} alt="" className="CpuImgT" />,
            series:'AMD Ryzen 5 4500',
            price:'4,990.-'
        },
        {
            id:3,
            cpu:<img src={RY7} alt="" className="CpuImgT" />,
            series:'AMD Ryzen 7 7700X',
            price:'16,490.-'
        },
        {
            id:4,
            cpu:<img src={RY9} alt="" className="CpuImgT" />,
            series:'AMD Ryzen 9 7900X',
            price:'22,590.-'
        },
        {
            id:5,
            cpu:<img src={I3} alt="" className="CpuImgT" />,
            series:'INTEL Core i3-10105',
            price:'3,990.-'
        },
        {
            id:6,
            cpu:<img src={I5} alt="" className="CpuImgT" />,
            series:'INTEL Core i5-12400',
            price:'7,690.-'
        },
        {
            id:7,
            cpu:<img src={I7} alt="" className="CpuImgT" />,
            series:'INTEL Core i7-10870H',
            price:'11,350.-'
        },
        {
            id:8,
            cpu:<img src={I9} alt="" className="CpuImgT" />,
            series:'INTEL Core i9-11900KF',
            price:'19,990.-'
        },
    ]
  return (
    <div className="disJustT">
      <div className="CpuBoxT">
        <div className="empty20pxT"></div>
        <Grid container spacing={2}>
            {dataCPU.map((ref) => (
          <Grid
            item
            xs={4}
            sm={3}
            md={2.4}
            style={{ display: "flex", justifyContent: "center" }}
            key={ref.id}
          >
            <div className="CpuCtT">
            <a href={'/store'}>
              <div className="CpuImgBoxT">
                {ref.cpu}
              </div>
              <div className="CpuDataBoxT">
                {ref.series}
                <br />
                {ref.price}
              </div>
              <div className="CpuButtomBoxT">
                <button className="butCauseT">ຂໍ້ມູນເພີ່ມເຕີມ</button>
              </div>
              </a>
            </div>
          </Grid>))}
        </Grid>
      </div>
    </div>
  );
}
