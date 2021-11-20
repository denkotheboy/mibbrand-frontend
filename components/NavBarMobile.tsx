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

const NavBarMobile = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <Drawer
        sx={{ display: { xs: "flex", md: "none" } }}
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <List>
          {MENU.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => onClickHandler(item.href)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <a href={"tel:+79221775194"}>
              <ListItemButton>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="+79221775194" />
              </ListItemButton>
            </a>
          </ListItem>
        </List>
      </Drawer>
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
