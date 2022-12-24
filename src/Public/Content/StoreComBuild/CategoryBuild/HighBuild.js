import React from "react";
import Img11 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/cpu1.png';
import Img12 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/MB1.png';
import Img13 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/GPU1.png';
import Img14 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/Ram1.png';
import Img15 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/ssd1.png';
import Img16 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/ssd2.png';
import Img17 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/PSP1.png';
import Img18 from '../../../../IMG2/CategoryBuild/HighSpec/Cat1/case1.png';

export default function HighBuild() {
  const Cat = [
    {
      id:1,
      Img1:<img src={Img11} alt="" className="ImgDataT" />,
      Img2:<img src={Img12} alt="" className="ImgDataT" />,
      Img3:<img src={Img13} alt="" className="ImgDataT" />,
      Img4:<img src={Img14} alt="" className="ImgDataT" />,
      Img5:<img src={Img15} alt="" className="ImgDataT" />,
      Img6:<img src={Img16} alt="" className="ImgDataT" />,
      Img7:<img src={Img17} alt="" className="ImgDataT" />,
      Img8:<img src={Img18} alt="" className="ImgDataT" />,
      Img9:'None',
      Name:'AMD Ryzen 9 5900X & GIGABYTE Radeon RX 6650 XT Gaming OC',
      CPU:'AMD Ryzen 9 5900X',PCPU:'17,000.-',
      MB:'ASUS PRIME X570-P/CSM',PMB:'5,990.-',
      GPU:'GIGABYTE Radeon RX 6650 XT Gaming OC',PGPU:'16,900.-',
      RAM:'KINGSTON FURY Beast DDR4 16GB (8GBx2) 3600',PRAM:'3,870.-',
      SSD:'PNY XLR8 CS3040 1TB M.2',PSSD:'5,790.-',
      SSD2:'HIKVISION Desire 1TB HIKSSDDESIRE1024G',PSSD2:'2,870.-',
      PSU:'THERMALTAKE Toughpower GF 850W', PPSU:'3,890.-',
      CASE:'Galax Revolution 05 White',PCASE:'1,550.-',
      MONITOR:'None',PMONITOR:'0.-',
      Total:'57,860 ฿',
    },
    {
      id:2,
      Img1:<img src={Img11} alt="" className="ImgDataT" />,
      Img2:<img src={Img12} alt="" className="ImgDataT" />,
      Img3:<img src={Img13} alt="" className="ImgDataT" />,
      Img4:<img src={Img14} alt="" className="ImgDataT" />,
      Img5:<img src={Img15} alt="" className="ImgDataT" />,
      Img6:<img src={Img16} alt="" className="ImgDataT" />,
      Img7:<img src={Img17} alt="" className="ImgDataT" />,
      Img8:<img src={Img18} alt="" className="ImgDataT" />,
      Img9:'None',
      Name:'AMD Ryzen 9 5900X & GIGABYTE Radeon RX 6650 XT Gaming OC',
      CPU:'AMD Ryzen 9 5900X',PCPU:'17,000.-',
      MB:'ASUS PRIME X570-P/CSM',PMB:'5,990.-',
      GPU:'GIGABYTE Radeon RX 6650 XT Gaming OC',PGPU:'16,900.-',
      RAM:'KINGSTON FURY Beast DDR4 16GB (8GBx2) 3600',PRAM:'3,870.-',
      SSD:'PNY XLR8 CS3040 1TB M.2',PSSD:'5,790.-',
      SSD2:'HIKVISION Desire 1TB HIKSSDDESIRE1024G',PSSD2:'2,870.-',
      PSU:'THERMALTAKE Toughpower GF 850W', PPSU:'3,890.-',
      CASE:'Galax Revolution 05 White',PCASE:'1,550.-',
      MONITOR:'None',PMONITOR:'0.-',
      Total:'57,860 ฿',
    },
    {
      id:3,
      Img1:<img src={Img11} alt="" className="ImgDataT" />,
      Img2:<img src={Img12} alt="" className="ImgDataT" />,
      Img3:<img src={Img13} alt="" className="ImgDataT" />,
      Img4:<img src={Img14} alt="" className="ImgDataT" />,
      Img5:<img src={Img15} alt="" className="ImgDataT" />,
      Img6:<img src={Img16} alt="" className="ImgDataT" />,
      Img7:<img src={Img17} alt="" className="ImgDataT" />,
      Img8:<img src={Img18} alt="" className="ImgDataT" />,
      Img9:'None',
      Name:'AMD Ryzen 9 5900X & GIGABYTE Radeon RX 6650 XT Gaming OC',
      CPU:'AMD Ryzen 9 5900X',PCPU:'17,000.-',
      MB:'ASUS PRIME X570-P/CSM',PMB:'5,990.-',
      GPU:'GIGABYTE Radeon RX 6650 XT Gaming OC',PGPU:'16,900.-',
      RAM:'KINGSTON FURY Beast DDR4 16GB (8GBx2) 3600',PRAM:'3,870.-',
      SSD:'PNY XLR8 CS3040 1TB M.2',PSSD:'5,790.-',
      SSD2:'HIKVISION Desire 1TB HIKSSDDESIRE1024G',PSSD2:'2,870.-',
      PSU:'THERMALTAKE Toughpower GF 850W', PPSU:'3,890.-',
      CASE:'Galax Revolution 05 White',PCASE:'1,550.-',
      MONITOR:'None',PMONITOR:'0.-',
      Total:'57,860 ฿',
    },
  ]
  return (
    <div className="disJustT">
      <div className="CategoryBuildT">
        {Cat.map((ref) => (
        <div className="BoxBuildT" key={ref.id}>
          <div className="imgBixBoxT">
            <div className="ImgBuildBoxT">
              <div>{ref.Img1}</div>
              <div>{ref.Img2}</div>
              <div>{ref.Img3}</div>
            </div>
            <div className="ImgBuildBoxT">
              <div>{ref.Img4}</div>
              <div>{ref.Img5}</div>
              <div>{ref.Img6}</div>
            </div>
            <div className="ImgBuildBoxT">
              <div>{ref.Img7}</div>
              <div>{ref.Img8}</div>
              <div>{ref.Img9}</div>
            </div>
          </div>
          <div  className="imgBixBox1T">
            <div className="NameBuildT">{ref.Name}</div>
            <div className="DataBuildT">
              <div className="ClassBuildT">CPU:</div>
              <div className="ClassBuildDataT">{ref.CPU}</div>
              <div className="ClassBuild2T">{ref.PCPU}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">MB:</div>
              <div className="ClassBuildDataT">{ref.MB}</div>
              <div className="ClassBuild2T">{ref.PMB}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">GPU:</div>
              <div className="ClassBuildDataT">{ref.GPU}</div>
              <div className="ClassBuild2T">{ref.PGPU}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">RAM:</div>
              <div className="ClassBuildDataT">{ref.RAM}</div>
              <div className="ClassBuild2T">{ref.PRAM}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">SSD:</div>
              <div className="ClassBuildDataT">{ref.SSD}</div>
              <div className="ClassBuild2T">{ref.PSSD}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">SSD2:</div>
              <div className="ClassBuildDataT">{ref.SSD2}</div>
              <div className="ClassBuild2T">{ref.PSSD2}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">PSU:</div>
              <div className="ClassBuildDataT">{ref.PSU}</div>
              <div className="ClassBuild2T">{ref.PPSU}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">CASE:</div>
              <div className="ClassBuildDataT">{ref.CASE}</div>
              <div className="ClassBuild2T">{ref.PCASE}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuildT">MONITOR:</div>
              <div className="ClassBuildDataT">{ref.MONITOR}</div>
              <div className="ClassBuild2T">{ref.PMONITOR}</div>
            </div>
            <div className="DataBuildT">
              <div className="ClassBuild21T">TOTAL:</div>
              <div className="ClassBuild22T">{ref.Total}</div>
            </div>
            <div className="ButtonBoxBuildT">
              <button className="ButtonBuildT">ສັ່ງຊື້ເຊັດນີ້</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
