import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

export default function SignIn() {

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async () => {
    let sendData = await fetch("http://localhost:4200/login", {
      method: "post",
      //   body: JSON.stringify(val.username,val.email,val.pass,val.city),
      body: JSON.stringify({  email, password}),

      headers: {
        "Content-Type": "application/json",
      },
    });
    sendData = await sendData.json();

    if(sendData.email)
    {
      localStorage.setItem("users", JSON.stringify(sendData));

      navigate("/")
    }
    else{
      alert("Incorrect username or passowrd")
    }
    console.log("sendData",sendData);

  };
  return (
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
            <Typography variant="h5">Please Sign In</Typography>

            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                   
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="email address"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    type="password"
                    label="password"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
                onClick={handleSubmit}
              >
                Login
              </Button>

              <Typography>
                Not registered?
                <a href="/signUp">Create an account</a>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
