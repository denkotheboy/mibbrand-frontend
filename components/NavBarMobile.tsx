import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import { TITLE } from "../constants";
import NavigationDrawer from "./NavigationDrawer";
import Basket from "./Basket";

const NavBarMobile = () => {
  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <Toolbar>
        <NavigationDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {TITLE}
        </Typography>
        <Basket />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
