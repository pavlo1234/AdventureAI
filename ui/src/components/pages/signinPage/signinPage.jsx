import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Header from "../../header";
import axios from 'axios'
import { API_URL } from '../../../utils/constants'

import "./signinPage.sass";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    axios
      .post(`${API_URL}sign-in/`, { email: username, password })
      .then(() => {
        sessionStorage.setItem("username", username);
        history.replace("/home");
      })
      .catch((error) => {
        console.error("Sign in error:", error);
        setMessage(error.message);
      });
  };
  return (
    <div className="sign-in-page">
      <Header />
      <div className="sign-in-page-wrapper">
        <div className="sign-in-page-header">Sign in</div>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="sign-in-page-item"
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            label="Username"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="sign-in-page-item"
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          onClick={handleLogin}
          variant="contained"
          size={"large"}
          style={{ backgroundColor: "var(--black)" }}
        >
          Sign in
        </Button>
        {message}
        <div className="sign-in-page-link">
          Don’t have an account?
          <Link
            to="/signup"
            style={{ marginLeft: "10px", color: "var(--green)" }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
