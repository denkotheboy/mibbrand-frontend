import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import { PATH, TITLE } from "../constants";
import NavigationDrawer from "./NavigationDrawer";
import Basket from "./Cart";
import { useRouter } from "next/router";

const NavBarMobile = () => {
  const router = useRouter();
  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ display: { xs: "flex", lg: "none" } }}
    >
      <Toolbar>
        <NavigationDrawer />
        <Typography
          onClick={() => router.push(PATH.HOME)}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {TITLE}
        </Typography>
        <Basket />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
