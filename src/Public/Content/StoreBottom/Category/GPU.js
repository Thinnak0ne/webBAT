import React from 'react'
import Grid from "@mui/material/Grid";
import GPU1 from '../../../../img/gpu/NVIDIA-GeForce-RTX-4090.png'
import GPU2 from '../../../../img/gpu/GIGABYTE-GeForce-RTX-4080.png'
import GPU3 from '../../../../img/gpu/ASUS-TUF-Gaming-NVIDIA-GeForce-RTX-3090.png'
import GPU4 from '../../../../img/gpu/ASUS-TUF-Gaming-NVIDIA-GeForce-RTX-3080-Ti.png'
import GPU5 from '../../../../img/gpu/ZOTAC-Gaming-GeForce-RTX-3060.png'
export default function GPU() { 

    const dataCPU = [
        {
            id:1,
            board:<img src={GPU1} alt="" className="CpuImgT" />,
            series:'NVIDIA GeForce RTX 4090',
            price:'$3,495'
        },
        {
            id:2,
            board:<img src={GPU2} alt="" className="CpuImgT" />,
            series:'GIGABYTE GeForce RTX 4080',
            price:'$1,477'
        },
        {
            id:3,
            board:<img src={GPU3} alt="" className="CpuImgT" />,
            series:'ASUS TUF Gaming NVIDIA GeForce RTX 3090',
            price:'$2,199'
        },
        {
            id:4,
            board:<img src={GPU4} alt="" className="CpuImgT" />,
            series:'ASUS TUF Gaming NVIDIA GeForce RTX 3080 Ti',
            price:'$994'
        },
        {
            id:5,
            board:<img src={GPU5} alt="" className="CpuImgT" />,
            series:'ZOTAC Gaming GeForce RTX 3060',
            price:'$353'
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
