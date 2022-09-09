import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Paper } from "@mui/material";
function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/");
    }
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [city, setCity] = useState("");
  const sendSignUP = async () => {
    let sendData = await fetch("http://localhost:4200/register", {
      method: "post",
      //   body: JSON.stringify(val.username,val.email,val.pass,val.city),
      body: JSON.stringify({ username, email, password, city }),

      headers: {
        "Content-Type": "application/json",
      },
    });
    sendData = await sendData.json();
    if (sendData.email) {
      alert("This email  has already registered");
    } else {
      console.log(sendData);
      localStorage.setItem("users", JSON.stringify(sendData));

      navigate("/");
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
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      label="email address"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="password"
                      label="password"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="city"
                      variant="standard"
                      fullWidth
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
