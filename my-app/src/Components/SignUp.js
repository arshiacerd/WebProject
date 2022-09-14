import React, { useState, useEffect, useRef , createContext} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Paper, InputAdornment, IconButton } from "@mui/material";
import Navbar from "./Navbar";

function SignUp() {
  
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  }, []);

  const [checkPass, setCheckPass] = useState({
    visible: false,
  });
  const passState = () => {
    setCheckPass({
      visible: !checkPass.visible,
    });
  };

  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPass] = useState("");
  var [city, setCity] = useState("");

  const [isLogin, setIsLogin] = useState(false);
  // const [fieldError, setFieldError] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  //   city: "",
  // });
  var [userError, setUserError] = useState("");
  var [passError, setPassError] = useState("");
  var [emailError, setEmailError] = useState("");
  var [cityError, setCityError] = useState("");
  const reference = useRef();
  var sendSignUP = async () => {
    let sendData = await fetch("http://localhost:4200/register", {
      method: "post",
      //   body: JSON.stringify(val.username,val.email,val.pass,val.city),
      body: JSON.stringify({ username, email, password, city, isLogin }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    sendData = await sendData.json();
    setUserError("");
    setPassError("");
    setEmailError("");
    setCityError("");
    if (sendData.email) {
      console.log(sendData);
      localStorage.setItem("users", JSON.stringify(sendData));
      navigate("/");
    } else if (sendData.error) {
      // if()

      let keys = [];
      for (let key in sendData.error) {
        if (sendData.error.hasOwnProperty(key)) keys.push(key);
      }
      
      // const obj = Object.assign({},sendData.error)
      // console.log(obj)
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === "username") {
          // setFieldError({ username : sendData.error[keys[i]] });

          setUserError(sendData.error[keys[i]]);
        } else if (keys[i] === "password") {
          // setFieldError({ password: sendData.error[keys[i]] });
          setPassError(sendData.error[keys[i]]);
        } else if (keys[i] === "email") {
          // setFieldError({ email: sendData.error[keys[i]] });
          setEmailError(sendData.error[keys[i]]);
        } else if (keys[i] === "city") {
          // setFieldError({ city: sendData.error[keys[i]] });
          setCityError(sendData.error[keys[i]]);
        }
      }
    }
  };
  return (
    <>

      <Grid container>
        <Grid item xs={12}>
          <Box
            maxWidth={600}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
            p={6}
          >
            <Paper
              elevation={16}
              sx={{ backgroundColor: "pink", padding: "2em" }}
            >
              <Typography variant="h5">Please Sign up</Typography>

              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      variant="standard"
                      fullWidth
                      helperText={userError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      label="email address"
                      variant="standard"
                      fullWidth
                      helperText={emailError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={!checkPass.visible ? "password" : "text"}
                      label="password"
                      variant="standard"
                      fullWidth
                      helperText={passError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={passState}>
                              {checkPass.visible ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="city"
                      variant="standard"
                      fullWidth
                      helperText={cityError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationCityIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 3 }}
                  onClick={sendSignUP}
                >
                  Sign Up
                </Button>

                <Typography>
                  Already registered? <a href="/signIn"> Sign In</a>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    

    </>
  );
}

export default SignUp;

