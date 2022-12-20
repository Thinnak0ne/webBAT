import React from 'react'
import Grid from "@mui/material/Grid";
import Rm1 from '../../../../img/Ram/CORSAIR-Vengeance-DDR5-32GB-(2x16GB).png'
import Rm2 from '../../../../img/Ram/Corsair-Dominator-Platinum-RGB-DDR5-64GB-(2x32GB).png'
import Rm3 from '../../../../img/Ram/Corsair-DOMINATOR-PLATINUM-RGB-DDR5-32GB-(2x16GB).png'
import Rm4 from '../../../../img/Ram/Kingston-Fury-Beast-16GB.png'
import Rm5 from '../../../../img/Ram/Crucial-RAM-64GB-Kit-(2x32GB).png'
export default function Ram() { 
    const dataCPU = [
        {
            id:1,
            board:<img src={Rm1} alt="" className="CpuImgT" />,
            series:'CORSAIR Vengeance DDR5 32GB (2x16GB)',
            price:'$134'
        },
        {
            id:2,
            board:<img src={Rm2} alt="" className="CpuImgT" />,
            series:'Corsair Dominator Platinum RGB DDR5 64GB (2x32GB)',
            price:'$179'
        },
        {
            id:3,
            board:<img src={Rm3} alt="" className="CpuImgT" />,
            series:'Corsair DOMINATOR PLATINUM RGB DDR5 32GB (2x16GB)',
            price:'$269'
        },
        {
            id:4,
            board:<img src={Rm4} alt="" className="CpuImgT" />,
            series:'Kingston Fury Beast 16GB',
            price:'$115'
        },
        {
            id:5,
            board:<img src={Rm5} alt="" className="CpuImgT" />,
            series:'Crucial RAM 64GB Kit (2x32GB)',
            price:'$239'
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
          ><a href={'/store'}>
            <div className="CpuCtT" >
            
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
            
            </div> </a>
          </Grid>))}
        </Grid>
      </div>
    </div>
  );
}
