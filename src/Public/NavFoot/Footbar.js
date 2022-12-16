import React from 'react'

export default function Footbar() {
  return (
    <div className='disJustT'>
      <div className='CenT'>
      <footer className="footer">
        <div className="l-footer">
          <div>
            <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />
          </div>
          <p>
            ເວັບໄຊນີ້ກໍ່ຕັ້ງຂື່ນເມື່ອ ວັນທີພວດເຮົາຂຶ້ນ Present
            ທາງເຮົາບໍລິການຈັດສະເປັກຄອມແລະບໍລິການອື່ນໆອືກຫຼາກຫຼາຍ
            ວ່ອງໄວທັນໃຈໄປໃຊ້ເວັບອື່ນ.
          </p>
        </div>
        <ul className="r-footer">
          <li>
            <h2>
              Social</h2>
            <ul className="box">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>

            </ul>
          </li>
          <li className="features">
            <h2>
              Information</h2>
            <ul className="box h-box">
              <li>Blog</li>
              <li>Pricing</li>
              <li>Sales</li>
              <li>Certifications</li>
              <li>Customer Service</li>
            </ul>
          </li>
          <li>
            <h2>
              Legal
            </h2>
            <ul className="box">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Contract</li>
            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p>
            All rights reserved by ©Weberpunk 2077
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}
