import React from 'react'

export default function Footbar() {
  return (
    <div>
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
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Pinterest</a></li>

            </ul>
          </li>
          <li className="features">
            <h2>
              Information</h2>
            <ul className="box h-box">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </li>
          <li>
            <h2>
              Legal
            </h2>
            <ul className="box">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contract</a></li>
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
  )
}
