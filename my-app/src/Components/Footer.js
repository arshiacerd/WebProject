import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
function Footer() {
  return (
    <>
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" ,justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <Grid container spacing={2} sx={{ backgroundColor: "red" }}>
          <Grid item xs={4}>
            <List
            sx={{width:"100%",}}
              subheader={
                <ListSubheader component="div">Food Item</ListSubheader>
              }
            >
              <ListItem >
                <ListItemText sx={{textAlign:"center"}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  tempore possimus, totam assumenda fuga unde, consequatur
                  explicabo minus sit molestias fugit laboriosam voluptas
                  quisquam nulla commodi nobis, necessitatibus voluptates aut.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} sx={{ backgroundColor: "blue" }}>
            <Typography>bcnd</Typography>
          </Grid>
          <Grid item xs={4} sx={{ backgroundColor: "green" }}>
            <Typography> nfcd</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
