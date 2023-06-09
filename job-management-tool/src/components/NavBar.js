import React from "react";
import {
  AppBar,
  Toolbar,
  Typography, Stack, Button
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <AppBar position="static" style={{background: '#f7d9d9', borderWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#7a8a7c'}}>
      <Toolbar>
        <Typography variant="h4"  color='RGB(18, 26, 72)'>
          Job Management Tool
        </Typography>
          <Stack spacing={2} direction="row" marginLeft={'15px'}> 

            <Link to="/addjob" >
              <Button variant='contained' sx={{color:'white', background: '#243c55'}}>Add Job</Button>
            </Link>
            <Link to="/" >
            <Button variant='contained' sx={{color:'white', background: '#243c55'}}>Current Application</Button>
            </Link>
            </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;