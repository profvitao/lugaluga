import TextField from "@mui/material/TextField";
import styles from "./Login.module.css";
import imgLogin from "../../../public/loginluga.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className={styles.container}>
        <div className="blocoa">
          <img src={imgLogin} />
        </div>
        <div className={styles.blocob}>
          <h1>LUGA-LUGA</h1>
          <div className={styles.formulario}>
            <TextField
              id="input-with-icon-textfield"
              label="E-mail"
              placeholder="lugaluga@senai.com.br"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />

            {/* SENHA */}
            <FormControl sx={{ mt: 3 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button sx={{ marginTop: "10px" }} variant="contained">
              Entrar
            </Button>
            <Button sx={{ marginTop: "10px" }} variant="outlined">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
