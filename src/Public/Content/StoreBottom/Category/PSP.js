import React from 'react'
import Grid from "@mui/material/Grid";
import PSP1 from '../../../../img/PSP/Corsair-RMx-Series-(2021)RM850x.png'
import PSP2 from '../../../../img/PSP/Thermaltake-Toughpower-GX2 80+_Gold-600W.png'
export default function GPU() { 

    const dataCPU = [
        {
            id:1,
            board:<img src={PSP1} alt="" className="CpuImgT" />,
            series:'Corsair RMx Series (2021), RM850x',
            price:'$3,495'
        },
        {
            id:2,
            board:<img src={PSP2} alt="" className="CpuImgT" />,
            series:'Thermaltake Toughpower GX2 80+ Gold 600W',
            price:'$65'
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
            <a href={'/store'}>
            <div className="CpuCtT">
            
              <div className="CpuImgBoxT">
                {ref.board}
              </div>
              <div className="CpuDataBoxT">
                {ref.series}
                <br />
                {ref.price}
              </div>
              <div className="CpuButtomBoxT">
                <button className="butCauseT">ຂໍ້ມູນເພີ່ມເຕີມ</button>
              </div>
             
            </div></a>
          </Grid>))}
        </Grid>
      </div>
    </div>
  );
}
