import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import { TITLE } from "../constants";
import { useRouter } from "next/router";
import { MENU } from "./Header";
import PhoneIcon from "@mui/icons-material/Phone";
import NavigationDrawer from "./NavigationDrawer";

const NavBarMobile = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <NavigationDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClick={(value) => onClickHandler(value)}
      />
      <AppBar
        position="relative"
        color="inherit"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {TITLE}
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarMobile;
