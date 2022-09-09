import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomDrawer from "./CustomDrawer";
function Navbar() {
  const navigate = useNavigate();

  const auth = localStorage.getItem("users");

  const logout = () => {
    localStorage.clear();
    navigate("/signUp");
  };
  const arr = [
    {
      p1: "Home",
      l1: "/",
    },
    {
      p1: "AddProducts",
      l1: "/p",
    },
    {
      p1: "ShowProducts",
      l1: "/sp",
    },
    {
      p1: "Shop",
      l1: "/s",
    },
  ];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Food app </Typography>
          {isMatch ? (
            <>
              <CustomDrawer />
            </>
          ) : (
            <>
              <Stack direction="row" sx={{ ml: 6 }} spacing={3}>
                {arr.map((pages, index) => {
                  return (
                    <>
                      <Link key={index} to={pages.l1}>
                        <Typography sx={{ color: "red" }}>
                          {pages.p1}
                        </Typography>
                      </Link>
                    </>
                  );
                })}
              </Stack>

              <Stack direction="row" sx={{ marginLeft: "auto" }}>
                {auth ? (
                  <>
                    <Typography sx={{ color: "red" }}>
                      {JSON.parse(auth).username}
                    </Typography>

                    <Link to="/signUp" onClick={logout}>
                      <Typography sx={{ color: "red" }}>Logout </Typography>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/signup">
                      <Typography sx={{ color: "red" }}>SignUp</Typography>
                    </Link>
                    <Link to="/signIn">
                      <Typography sx={{ color: "red" }}>SignIN</Typography>
                    </Link>
                  </>
                )}
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
