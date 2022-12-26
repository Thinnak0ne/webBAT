import React from 'react'
import ImgM from '../../IMG2/ImgAbout.jpg'
export default function About() {

  // const page = [
  //   { id: 1, menu: "sing t trng karn jark karn h web" },
  //   { id: 2, menu: "sing t trng karn jark karn h web" },
  // ]

  // const page1 = [
  //   { id: 3, menu: "sing t trng karn jark karn h web" },
  //   { id: 4, menu: "sing t trng karn jark karn h web" },
  // ]

  return (
    <div className='disJustT'>
      <div className='PaperT'>
        <div className='TextAboutT'>About us</div>

        <div>
          <div className='CenT'>
            <div className='PhotoA'><img src={ImgM} alt='' className='AboutImageT'/></div>
          </div>
          <div className='empty20pxT'></div>
          <div className='TextAboutT'>ຈຸດປະສົງຂອງເວັບ</div>
          <div className='CenT'>
            <div className='AboutTextwebT'>ຈຸດປະສົງຂອງເວັບນີ້ແມ່ນພັດທະນາມາເພື່ອເປັນໂປຣເຈັກໃຊ້ໃນການສອບເສັງທ້າຍພາກຮຽນທີ 1 
          </div>
          </div>
          

          <div className='empty20pxT'></div>
          <div className='TextAboutT'>ຄວາມຕ້ອງການ</div>
          <div className='CenT'>
            <div className='AboutTextwebT'>ຄວາມຕ້ອງການຂອງຜູ້ພັດທະນາແມ່ນສ້າງຂຶ້ນມາເພື່ອອຳນວຍຄວາມສະດວກໃຫ້ແກ່ຜູ້ທີ່ຕ້ອງການຫາຄວາມຮູ້ກ່ຽວກັບລະບົບຄອມພິວເຕີ
            ຕ້ອງການສ້ອມແປງຄອມຫຼືປະກອບຄອມເປັນຂອງຕົວເອງເພື່ອໃຊ້ໃນການສຶກສາຫຼືແທດເຫມາະຕໍ່ໜ້າວຽກທີ່ລູກຄ້າຜະເຊີນໜ້າຢູ່ນະຕອນນັ້ນ

          </div>
          </div>
          <div className='empty20pxT'></div>
          <div className='TextAboutT'> ສິ່ງທີ່ໄດ້</div>
          <div className='CenT'>
            <div className='AboutTextwebT'>
              ສິ່ງທີ່ຈະໄດ້ຈາກການນຳໃຊ້ເວັບ ແມ່ນຄວາມຮູ້ກ່ຽວກັບຄອມພິວເຕີບໍ່ວ່າຈະເປັນ ຄວາມຮູ້ພື່ນຖານໃນການຈັດສະເປັກຄອມເພື່ອໃຫ້ເອຶ້ອອຳນວຍຕໍ່ໜ້າວຽກ
              ແລະງົບປະມານທີ່ຕ້ອງໃຊ້ , ການບຳລຸງຮັກສາ ຄອມໃຫ້ມີອາຍຸການໃຊ້ງານທີ່ຍາວນານຂຶ້ນ
          </div>
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          {/* <div className='HalfA'>
            {page.map(row =>
              <div key={row.id} style={{display: "flex"}}>
                <img src='' width={"20%"} className='CirclerightA' />
                <p>{row.menu}</p>
              </div>
            )}
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className='HalfA'>
            {page.map(row =>
              <div key={row.id} style={{display: "flex"}}>
                <img src='' width={"20%"} className='CirclerightA' />
                <p>{row.menu}</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
