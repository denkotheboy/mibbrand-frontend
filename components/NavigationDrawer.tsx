import React, { FC, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MENU } from "./Header";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const NavigationDrawer: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

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
    </>
  );
};

export default NavigationDrawer;
