import React from 'react'
import MB1 from '../../../../img/Mainboard/Asus-ROG-Strix-B550-F-Gaming.png'
import MB2 from '../../../../img/Mainboard/GIGABYTE-B660M-DS3H-DDR4.png'
import MB3 from '../../../../img/Mainboard/MSI-B560M-PRO-ProSeries.png'
import MB4 from '../../../../img/Mainboard/MSI-MPG-X570S-Edge.png'
import MB5 from '../../../../img/Mainboard/NZXT-N7-B550.png'
import Grid from "@mui/material/Grid";

export default function Mainboard() {
    const dataCPU = [
        {
            id:1,
            board:<img src={MB1} alt="" className="CpuImgT" />,
            series:'Asus ROG Strix B550-F Gaming',
            price:'$204'
        },
        {
            id:2,
            board:<img src={MB2} alt="" className="CpuImgT" />,
            series:'GIGABYTE B660M DS3H DDR4',
            price:'$104'
        },
        {
            id:3,
            board:<img src={MB3} alt="" className="CpuImgT" />,
            series:'MSI B560M PRO ProSeries',
            price:'$199'
        },
        {
            id:4,
            board:<img src={MB4} alt="" className="CpuImgT" />,
            series:'MSI MPG X570S Edge',
            price:'$234'
        },
        {
            id:5,
            board:<img src={MB5} alt="" className="CpuImgT" />,
            series:'NZXT N7 B550',
            price:'$109'
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
              </a>
            </div>
          </Grid>))}
        </Grid>
      </div>
    </div>
  );
}
