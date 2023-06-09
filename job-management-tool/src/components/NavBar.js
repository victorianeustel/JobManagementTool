import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" >
          Job Management Tool
        </Typography>
          <div >
            <Link to="/addjob" >
              Add Job
            </Link>
            <Link to="/" >
              Job Applications
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;