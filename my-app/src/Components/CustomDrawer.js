import {
  Drawer,
  IconButton,
  Stack,
  Link,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography
} from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

function CustomDrawer() {
  const arr = [
    {
      p1: "Home",
      l1: "/",
    },
    {
      p1: "Products",
      l1: "/p",
    },
    {
      p1: "Shop",
      l1: "/s",
    },
  ];

  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <IconButton onClick={() => setDrawer(true)} sx={{ marginLeft: "auto" }}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{
          sx: {
            width: "240px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Stack direction="column" spacing={3}>
          <List>
            {arr.map((pages, index) => {
              return (
                <>
                  <Link key={index} to={pages.l1}>
                    <ListItemButton>
                      <ListItemText primary={pages.p1}></ListItemText>
                    </ListItemButton>
                  </Link>
                </>
              );
            })}
          </List>

          <Stack direction="row" sx={{ marginLeft: "auto" }}>
                <Link to="/signup">
                  <Typography sx={{color:"red"}}>SignUP</Typography>
                </Link>
                <Link to="/signIn">
                 
                  <Typography  sx={{color:"red"}}>SignIN</Typography>
                </Link>
              </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default CustomDrawer;
