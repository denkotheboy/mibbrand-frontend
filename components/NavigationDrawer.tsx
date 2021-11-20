import React, { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MENU } from "./Header";
import PhoneIcon from "@mui/icons-material/Phone";

interface IProps {
  open: boolean;
  onClose: () => void;
  onClick: (value: string) => void;
}

const NavigationDrawer: FC<IProps> = ({ open, onClose, onClick }) => {
  return (
    <Drawer
      sx={{ display: { xs: "flex", md: "none" } }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <List>
        {MENU.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => onClick(item.href)}>
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
  );
};

export default NavigationDrawer;
