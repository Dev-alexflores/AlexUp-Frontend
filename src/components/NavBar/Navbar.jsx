import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar,Typography} from "@material-ui/core";
import "./Navbar.css";

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="Navbar">
              <img src="https://www.freeiconspng.com/thumbs/rilakkuma-icon-png/rilakkuma-icon-png-5.png" alt="logo" style={{ height:"60px"}}/>
              <div className="navbar-content">
                <NavLink
                    className="nav-link"
                    to="/"
                >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Get Start
                    </Typography>
                </NavLink>
                <NavLink
                to="/"
                className="nav-link"
                >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Projects
                    </Typography>
                </NavLink>   
              </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
