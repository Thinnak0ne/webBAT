import React from "react";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Profile from "../../img/profile.png";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="disJustT">
      <div className="PaperT">
        <div className="LoginMainT">
          <div className="LoginBoxT">
            <div className="LoginT">
              <div className="LoginBoxImgT">
                <img src={Profile} alt="" className="LoginImgT" />
              </div>
              <div className="empty10pxT" />
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: "#FF8801" }}
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  className="LoginStyleT"
                  style={{ color: "#FF8801" }}
                  label="Email"
                />
              </FormControl>
              <div className="empty10pxT" />
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: "#FF8801" }}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  className="LoginStyleT"
                  style={{ color: "#FF8801" }}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={{ color: "#FF8801" }}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="empty10pxT" />
              <div className="LoginButtonBoxT">
                <button>Cancel</button>
                <button>Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
