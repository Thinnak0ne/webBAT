import React from "react";
// import General from "./RepairContent/General";
import Img from "../../img/message2.png"
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


export default function Repair() {
  return (
    <div className="headhomeB2">
      <div className="bodyRB">
        <span className="txtRB">ບໍລິການຫຼັງການຂາຍ</span>
        <div className="CategoryB">
          {/* <General />
          <div className="empty20pxT"></div>
          <General />
          <div className="empty20pxT"></div>
          <General />
          <div className="empty20pxT"></div>
          <General />
          <div className="empty20pxT"></div>
          <General />
          <div className="empty20pxT"></div>
          <General /> */}
          <span className="txtB1">
            ແຈ້ງບັນຫາຂອງທ່ານ
            <span>
              <ul className="paddingtopB">
                <FormControl className='containrgs2B1'>
                  <InputLabel
                    disabled
                    style={{ fontFamily: 'Noto Sans Lao', color: 'black' }} >ບັນຫາ:</InputLabel>
                  <OutlinedInput
                    label="ບັນຫາ:"
                    style={{ fontFamily: 'Noto Sans Lao', }}
                    className="rgsabout1B1"
                  />
                </FormControl>
                <br />
                <FormControl className='containrgs2B1'>
                  <InputLabel
                    disabled
                    style={{ fontFamily: 'Noto Sans Lao', color: 'black' }} >ເບີໂທ:</InputLabel>
                  <OutlinedInput
                    label="ເບີໂທ:"
                    style={{ fontFamily: 'Noto Sans Lao', }}
                    className="rgsabout1B1"
                  />
                </FormControl>
                <br />
                <FormControl className="containrgs2B">
                  <InputLabel
                    id="demo-multiple-chip-label"
                    style={{ fontFamily: "Noto Sans Lao", color: 'black' }}
                  >
                    ຮາດແວຣ໌ທີ່ມີປັນຫາ:
                  </InputLabel>
                  <OutlinedInput
                    label="ຮາດແວຣ໌ທີ່ມີປັນຫາ:"
                    style={{ fontFamily: "Noto Sans Lao" }}
                    className="rgsabout1B"
                  />
                </FormControl>
                <br />
                <FormControl className="containrgs2B">
                  <InputLabel
                    id="demo-multiple-chip-label"
                    style={{ fontFamily: "Noto Sans Lao", color: 'black' }}
                  >
                    ຍີ່ຫໍ້:
                  </InputLabel>
                  <OutlinedInput
                    label="ຍີ່ຫໍ້:"
                    style={{ fontFamily: "Noto Sans Lao" }}
                    className="rgsabout1B"
                  />
                </FormControl>
                <br />
                <FormControl className="containrgs2B">
                  <InputLabel
                    id="demo-multiple-chip-label"
                    style={{ fontFamily: "Noto Sans Lao", color: 'black' }}
                  >
                    ລຸ່ນ:
                  </InputLabel>
                  <OutlinedInput
                    label="ລຸ່ນ:"
                    style={{ fontFamily: "Noto Sans Lao" }}
                    className="rgsabout1B"
                  />
                </FormControl>
                <br />
                <FormControl className="containrgs2B">
                  <InputLabel
                    id="demo-multiple-chip-label"
                    style={{ fontFamily: "Noto Sans Lao", color: 'black' }}
                  >
                    ລາຍລະອຽດ:
                  </InputLabel>
                  <OutlinedInput
                    label="ລາຍລະອຽດ:"
                    style={{ fontFamily: "Noto Sans Lao" }}
                    className="rgsabout1B"
                  />
                </FormControl>
                <br />
                <div className="bottonB" >Submit</div>
              </ul>
            </span>
          </span>

        </div>
        <div className="repaiconB">
          <div className="containerB">
            <div className="imagB">
              <img src={Img} className="ImgB4" alt="img" />
            </div>
            <div className="textB">
              <h1>ພວກເຮົາຮັບໃຫ້ຄຳປຶກສາກ່ຽວກັບການສ້ອມແປງອຸປະກອນຕ່າງໆ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
